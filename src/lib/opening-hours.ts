const TZ = 'Europe/Berlin'

/** [openH, openM, closeH, closeM] — Sonntag durchgehend, Mo–Sa Mittag + Abend */
const SUNDAY: readonly (readonly [number, number, number, number])[] = [[11, 0, 23, 0]]
const WEEKDAY: readonly (readonly [number, number, number, number])[] = [
  [11, 0, 14, 30],
  [17, 0, 23, 0],
]

export type OpenStatusResult = {
  isOpen: boolean
  label: string
  detail: string
}

function toMinutes(h: number, m: number) {
  return h * 60 + m
}

function formatMinutes(total: number) {
  const h = Math.floor(total / 60)
  const m = total % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function getBerlinDate(date = new Date()) {
  return new Date(date.toLocaleString('en-US', { timeZone: TZ }))
}

function slotsForDay(day: number) {
  return day === 0 ? SUNDAY : WEEKDAY
}

function statusAt(date: Date): OpenStatusResult {
  const day = date.getDay()
  const now = toMinutes(date.getHours(), date.getMinutes())
  const slots = slotsForDay(day)

  for (const [oh, om, ch, cm] of slots) {
    const open = toMinutes(oh, om)
    const close = toMinutes(ch, cm)
    if (now >= open && now < close) {
      return {
        isOpen: true,
        label: 'Gerade geöffnet',
        detail: `bis ${formatMinutes(close)} Uhr`,
      }
    }
  }

  for (const [oh, om] of slots) {
    const open = toMinutes(oh, om)
    if (now < open) {
      return {
        isOpen: false,
        label: 'Geschlossen',
        detail: `öffnet wieder um ${formatMinutes(open)} Uhr`,
      }
    }
  }

  const tomorrow = new Date(date)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const [oh, om] = slotsForDay(tomorrow.getDay())[0]

  return {
    isOpen: false,
    label: 'Geschlossen',
    detail: `öffnet wieder morgen um ${formatMinutes(toMinutes(oh, om))} Uhr`,
  }
}

/** Nächster Wechsel (Öffnen oder Schließen) in Millisekunden ab jetzt */
export function msUntilNextChange(from = new Date()) {
  const berlin = getBerlinDate(from)
  const current = statusAt(berlin)

  for (let offset = 0; offset <= 24 * 60; offset++) {
    const probe = new Date(berlin)
    probe.setMinutes(probe.getMinutes() + offset)
    const next = statusAt(probe)
    if (next.isOpen !== current.isOpen || next.detail !== current.detail) {
      const real = new Date(from.getTime() + offset * 60_000)
      return Math.max(real.getTime() - from.getTime(), 1_000)
    }
  }

  return 60_000
}

export function getOpenStatus(from = new Date()): OpenStatusResult {
  return statusAt(getBerlinDate(from))
}
