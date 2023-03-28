import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a
          className="footer__git"
          href="https://github.com/YuMentsel"
          target={'_blank'}
          rel="noreferrer"
        ></a>
        2023
        <a
          data-testid="link"
          className="footer__rss"
          href="https://rs.school/react/"
          target={'_blank'}
          rel="noreferrer"
        ></a>
      </footer>
    );
  }
}

export default Footer;
