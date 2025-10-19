function BotSpecs({ bot, onBack, onEnlist }) {
  const classColors = {
    Support: 'primary',
    Medic: 'success',
    Assault: 'danger',
    Defender: 'warning',
    Captain: 'info',
    Witch: 'dark'
  };

  return (
    <div className="card shadow-lg">
      <div className="card-header bg-dark text-white">
        <h2>Bot Specifications</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <img
              src={bot.avatar_url}
              alt={bot.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8">
            <h3>{bot.name}</h3>
            <span className={`badge bg-${classColors[bot.bot_class] || 'secondary'} mb-3`}>
              {bot.bot_class}
            </span>
            <p className="lead">{bot.catchphrase}</p>

            <div className="row mt-4">
              <div className="col-4">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <h4>❤️ {bot.health}</h4>
                    <small className="text-muted">Health</small>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <h4>⚔️ {bot.damage}</h4>
                    <small className="text-muted">Damage</small>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <h4>🛡️ {bot.armor}</h4>
                    <small className="text-muted">Armor</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 d-flex gap-2">
              <button className="btn btn-secondary" onClick={onBack}>
                ← Back to List
              </button>
              <button className="btn btn-success" onClick={() => onEnlist(bot)}>
                Enlist Bot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;