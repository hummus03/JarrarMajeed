import Link from "next/link";

export default function Project({ project, index }) {
  let link = `/jobs/${index}`;
  return (
    <li>
      <h3><Link href={link}>{project.title}</Link></h3>
      <p>{project.desc}</p>
    </li>
  );
}