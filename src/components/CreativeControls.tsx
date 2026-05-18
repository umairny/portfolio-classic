type CreativeControlsProps = {
  theme: string
  styleMode: string
  onThemeChange: (theme: string) => void
  onStyleChange: (style: string) => void
}

export function CreativeControls({
  theme,
  styleMode,
  onThemeChange,
  onStyleChange,
}: CreativeControlsProps) {
  return (
    <section className="section studio-panel" aria-label="Interactive creative controls">
      <div>
        <p className="eyebrow">Creative Playground</p>
        <h2>A portfolio visitors can touch: switch moods, explore work, and understand the range fast.</h2>
      </div>
      <div className="controls">
        <div className="control-group" aria-label="Theme color">
          {['midnight', 'paper', 'gold'].map((item) => (
            <button
              className={theme === item ? 'active' : ''}
              key={item}
              type="button"
              onClick={() => onThemeChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="control-group" aria-label="Design style">
          {['classic', 'future'].map((item) => (
            <button
              className={styleMode === item ? 'active' : ''}
              key={item}
              type="button"
              onClick={() => onStyleChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
