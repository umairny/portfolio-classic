type CreativeControlsProps = {
  theme: string
  styleMode: string
  onThemeChange: (theme: string) => void
  onStyleChange: (style: string) => void
}

const themeOptions = [
  { id: 'midnight', label: 'Midnight' },
  { id: 'paper', label: 'Paper' },
  { id: 'gold', label: 'Gold' },
]

const styleOptions = [
  { id: 'classic', label: 'Classic' },
  { id: 'future', label: 'Future' },
  { id: 'three-d', label: '3D Future' },
]

export function CreativeControls({
  theme,
  styleMode,
  onThemeChange,
  onStyleChange,
}: CreativeControlsProps) {
  return (
    <section className="section studio-panel" aria-label="Interactive creative controls">
      <div className="controls">
        <div className="control-group" aria-label="Theme color">
          {themeOptions.map((item) => (
            <button
              className={theme === item.id ? 'active' : ''}
              key={item.id}
              type="button"
              onClick={() => onThemeChange(item.id)}
            >
              <span className={`control-icon theme-icon control-theme-${item.id}`} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="control-group" aria-label="Design style">
          {styleOptions.map((item) => (
            <button
              className={styleMode === item.id ? 'active' : ''}
              key={item.id}
              type="button"
              onClick={() => onStyleChange(item.id)}
            >
              <span className={`control-icon style-icon control-style-${item.id}`} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
