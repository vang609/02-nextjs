import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page','Enrique','información','...'],
};




export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  )
}
