import css from './Footer.module.css';

const Footer = () => {
    return <footer className={css.footer}>
  <div className={css.content}>
    <p>© {new Date().getFullYear()} MyNextProject. All rights reserved.</p>
    <div className={css.wrap}>
      <p>Developer: Maria Skobeleva</p>
      <p>
        Contact us:
        <a href="<mailto:student@brrrr.app>"> M_Skobeleva@brrrr.app</a>
      </p>
    </div>
  </div>
</footer>
}


export default Footer;