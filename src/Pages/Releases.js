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
        <article>
          <div className="release-text">
            <h4>Dungeons of Draegmor Beta</h4>
            <p>Text Based Console App</p>
            {/* <a
              href="https://dave-sommerville.github.io/ds-code-releases/dungeon-readme.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-book hover"></i>
            </a> */}
            <a
              href="https://dave-sommerville.github.io/ds-code-releases/Releases/dungeon-adventurers-pack.zip"
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
            <img src="https://dave-sommerville.github.io/ds-code-releases/img/dungeongif.gif" className="eyeframe" alt="Dungeons of Draegmor preview" />
          </figure>
        </article>
        <article>
          <figure>
            <img src="https://dave-sommerville.github.io/ds-code-releases/img/blackjackgif.gif" className="eyeframe" alt="Blackjack animation preview" />
          </figure>
          <div className="release-text">
            <h4>The Deck</h4>
            <p>Open Source JavaScript object with SVG resource</p>
            <p>

            <a
              href="https://dave-sommerville.github.io/ds-code-releases/Releases/public-deck.zip"
              >
              Download Zip
            </a>
              </p>
              <p>

            <a
              href="https://github.com/dave-sommerville/the-deck"
              >
              View Repo
            </a>
              </p>
          </div>
        </article>
        <article>
          <div className="w-100">
            <h4>Haunted House Console App</h4>
            <p>My first experience with C# console text games.</p>
            <a
              href="https://dave-sommerville.github.io/ds-code-releases/Releases/Haunted-House.zip"
            >
              Download Zip
            </a>
            <a
              href="https://github.com/dave-sommerville/haunted-house"
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