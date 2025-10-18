import BotCard from './BotCard';

function BotCollection({ bots, onBotClick }) {
  return (
    <div>
      <h2 className="mb-3">Bot Collection</h2>
      <div className="row g-3">
        {bots.map(bot => (
          <div key={bot.id} className="col-md-6 col-lg-4">
            <BotCard 
              bot={bot} 
              onClick={() => onBotClick(bot)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;