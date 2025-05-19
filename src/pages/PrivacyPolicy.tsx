import ReactMarkdown from 'react-markdown';

const markdown = `# Privacy Policy\n\n_Last updated: May 2025_\n\nThis website (\"Site\") is a demonstration project and is not a real law firm, business, or service provider. The Site is operated solely for the purpose of showcasing a domain name that ranks in search engines and is available for sale.\n\n## No Personal Information Collected\nWe do not collect, store, or process any personal information from visitors. Any contact forms or interactive features are non-functional and for demonstration only.\n\n## No Legal Advice\nNothing on this Site constitutes legal advice, and no attorney-client relationship is formed by your use of this Site.\n\n## Limitation of Liability\nThe Site and its operators disclaim all liability for any damages, losses, or claims arising from the use or reliance on any information provided herein. The Site is provided \"as is\" without warranties of any kind.\n\n## Third-Party Links\nThis Site may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.\n\n## For Sale Notice\nThis Site is for demonstration purposes only and is intended to facilitate the sale of the domain name. All content is fictitious.\n\n## Contact\nFor inquiries about purchasing this domain, please use the contact information provided on the Site.\n`;

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="prose prose-lg">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
} 