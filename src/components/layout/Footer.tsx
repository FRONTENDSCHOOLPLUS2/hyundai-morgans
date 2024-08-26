import Link from "next/link";

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
            <li># Next.js</li>
            <li># Api</li>
            <li># TypeScript</li>
            <li># Tailwind</li>
            <li># HTML</li>
            <li># CSS</li>
            <li># mongo.db</li>
          </ul>
        </li>
        <li className="f_copy">
          <span>© COPYRIGHT 2024 HYUNDAI MOGANS GENISISUYEON.  ALL RIGHTS RESERVED.</span>
        </li>
      </ul>
      <button><Link href={'https://github.com/FRONTENDSCHOOLPLUS2/hyundai-morgans'}>READ ME</Link></button>
    </footer>
  );
}