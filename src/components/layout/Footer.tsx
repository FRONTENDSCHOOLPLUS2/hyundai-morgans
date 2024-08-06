export default function Footer() {
  return (
    <footer>
      <aside>
        <img src="/images/genisisu_logo_w.png" alt=""/>
      </aside>
      <ul>
        <li className="f_github">
          <h4>GITHUB</h4>
          <ul className="footerInfo">
            <li><a href="#none">@sylee0102</a></li>
            <li><a href="#none">@redcontroller</a></li>
            <li><a href="#none">@ryungom</a></li>
          </ul>
        </li>
        <li className="f_skill">
          <h4>SKILL</h4>
          <ul className="footerInfo">
            <li><a href="#none"># Next.js</a></li>
            <li><a href="#none"># Api</a></li>
            <li><a href="#none"># TypeScript</a></li>
            <li><a href="#none"># Tailwind</a></li>
            <li><a href="#none"># HTML</a></li>
            <li><a href="#none"># CSS</a></li>
            <li><a href="#none"># mongo.db</a></li>
          </ul>
        </li>
        <li className="f_copy">
          <span>© COPYRIGHT 2024 HYUNDAI MOGANS GENISISUYEON.  ALL RIGHTS RESERVED.</span>
        </li>
      </ul>
      <button>READ ME</button>
    </footer>
  );
}