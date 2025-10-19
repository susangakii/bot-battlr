import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="sticky-top" style={{ top: '20px' }}>
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Your Bot Army ({army.length})</h3>
        </div>
        <div className="card-body" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          {army.length === 0 ? (
            <p className="text-muted text-center">No Bots Enlisted Yet!</p>
          ) : (
            <div className="d-flex flex-column gap-3">
              {army.map(bot => (
                <BotCard
                  key={bot.id}
                  bot={bot}
                  onClick={() => onRelease(bot)}
                  onDischarge={() => onDischarge(bot)}
                  showArmyActions={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;