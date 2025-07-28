import { motion } from 'framer-motion';
import '../css/releases.css';
function Releases() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <section className="releases-wrapper">
        <h2>Releases</h2>
        <article className="flex">
          <div className="release-text f-col">
            <h4>Dungeons of Draegmor</h4>
            <h5 className="orange-text">Beta</h5>
            <p>Text Based Console App</p>
            <a
              href="https://dave-sommerville.github.io/ds-code-releases/dungeon-readme.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-book hover"></i>
            </a>
            <a
              href="https://dave-sommerville.github.io/ds-code-releases/Releases/dungeon-adventurers-pack.zip"
              className="hover"
            >
              Download Zip
            </a>
            <a
              href="https://github.com/dave-sommerville/Dungeon_Crawler"
              className="hover"
            >
              View Repo
            </a>
          </div>
          <figure>
            <img src="./src/img/dungeongif.gif" className="eyeframe" alt="Dungeons of Draegmor preview" />
          </figure>
        </article>
        <article className="flex">
          <figure>
            <img src="./src/img/blackjackgif.gif" className="eyeframe" alt="Blackjack animation preview" />
          </figure>
          <div className="release-text f-col">
            <h4>The Deck</h4>
            <p>Open Source JavaScript object with SVG resource</p>
            <a
              href="https://dave-sommerville.github.io/ds-code-releases/Releases/public-deck.zip"
              className="hover"
            >
              Download Zip
            </a>
            <a
              href="https://github.com/dave-sommerville/the-deck"
              className="hover"
            >
              View Repo
            </a>
          </div>
        </article>
        <article className="flex center">
          <div className="release-text f-col">
            <h4>Haunted House Console App</h4>
            <p>My first experience with C# console text games.</p>
            <a
              href="https://dave-sommerville.github.io/ds-code-releases/Releases/Haunted-House.zip"
              className="hover"
            >
              Download Zip
            </a>
            <a
              href="https://github.com/dave-sommerville/haunted-house"
              className="hover"
            >
              View Repo
            </a>
          </div>
        </article>
      </section>
    </motion.div>
  );
}
export default Releases;