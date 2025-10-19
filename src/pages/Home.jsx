import { useState, useEffect } from 'react';
import BotCollection from '../components/BotCollection';
import YourBotArmy from '../components/YourBotArmy';
import BotSpecs from '../components/BotSpecs';
import SortBar from '../components/SortBar';

function Home() {
  const [bots, setBots] = useState([]); //fetch
  const [army, setArmy] = useState([]); //army enlisting
  const [selectedBot, setSelectedBot] = useState(null); //bot selection
  const [sortBy, setSortBy] = useState('');//sorting ((health, damage, or armor))
  const [filterClass, setFilterClass] = useState([]); //filtering by bot classes

  // fetch all bots (GET)
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  // enlist a bot to the army
  const enlistBot = (bot) => {
    if (army.find(b => b.id === bot.id)) {
      alert("This Bot is Already in Your Army!");
      return;
    }

    if (army.find(b => b.bot_class === bot.bot_class)) {
      alert(`You Already Have a ${bot.bot_class} Class Bot in Your Army!`);
      return;
    }

    setArmy([...army, bot]);
    setSelectedBot(null);
  };

  // release a bot from the army but keep it in main collection
  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  // permanently discharge a bot (DELETE). from both the main collection and army
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setBots(bots.filter(b => b.id !== bot.id));
          setArmy(army.filter(b => b.id !== bot.id));
        }
      })
  };

  // view a bot in BotSpecs
  const viewBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  //return to bot collection from BotSpecs view
  const goBack = () => {
    setSelectedBot(null);
  };

  // filter by class and sort by criteria
  const getFilteredAndSortedBots = () => {
    let filtered = [...bots];

    if (filterClass.length > 0) {
      filtered = filtered.filter(bot => filterClass.includes(bot.bot_class));
    }

    if (sortBy) {
      filtered.sort((a, b) => b[sortBy] - a[sortBy]);
    }

    return filtered;
  };

  return (
    <div className="container-fluid">
      <header className="bg-dark text-white text-center py-4 mb-4">
        <h1>Bot Battlr</h1>
        <p className="lead">Build Your Ultimate Bot Army!</p>
      </header>

      <div className="row">
        <div className="col-lg-8">
          {selectedBot ? (
            <BotSpecs
              bot={selectedBot}
              onBack={goBack}
              onEnlist={enlistBot}
            />
          ) : (
            <>
              <SortBar
                sortBy={sortBy}
                setSortBy={setSortBy}
                filterClass={filterClass}
                setFilterClass={setFilterClass}
              />
              <BotCollection
                bots={getFilteredAndSortedBots()}
                onBotClick={viewBotSpecs}
              />
            </>
          )}
        </div>

        <div className="col-lg-4">
          <YourBotArmy
            army={army}
            onRelease={releaseBot}
            onDischarge={dischargeBot}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;