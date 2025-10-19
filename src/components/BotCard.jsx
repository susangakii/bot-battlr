function BotCard({ bot, onClick, onDischarge, showArmyActions }) {
  const handleDischarge = (e) => {
    e.stopPropagation();
    if (onDischarge) {
      onDischarge();
    }
  };

  const handleRelease = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  const classColors = {
    Support: 'primary',
    Medic: 'success',
    Assault: 'danger',
    Defender: 'warning',
    Captain: 'info',
    Witch: 'dark'
  };

  return (
    <div className="card h-100 shadow-sm" style={{ cursor: showArmyActions ? 'default' : 'pointer' }} onClick={showArmyActions ? undefined : onClick}>
      <img
        src={bot.avatar_url}
        className="card-img-top"
        alt={bot.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <span className={`badge bg-${classColors[bot.bot_class] || 'secondary'} mb-2`}>
          {bot.bot_class}
        </span>
        <p className="card-text small text-muted">{bot.catchphrase}</p>
        <div className="d-flex justify-content-between small mb-3">
          <span>❤️ {bot.health}</span>
          <span>⚔️ {bot.damage}</span>
          <span>🛡️ {bot.armor}</span>
        </div>

        {showArmyActions && (
          <div className="d-grid gap-2">
            <button
              className="btn btn-warning btn-sm"
              onClick={handleRelease}
            >
              Release from Army
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={handleDischarge}
            >
              ✕ Permanently Discharge
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BotCard;