import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `# Terms of Service\n\n_Last updated: May 2025_\n\nThis website (\"Site\") is a demonstration project and is not a real law firm, business, or service provider. The Site is operated solely for the purpose of showcasing a domain name that ranks in search engines and is available for sale.\n\n## Acceptance of Terms\nBy accessing or using this Site, you acknowledge and agree that this Site is for demonstration purposes only and does not provide any real services or legal advice.\n\n## No Legal Relationship\nNo attorney-client or business relationship is formed by your use of this Site. All content is fictitious and for illustrative purposes only.\n\n## Limitation of Liability\nThe Site and its operators disclaim all liability for any damages, losses, or claims arising from the use or reliance on any information provided herein. The Site is provided \"as is\" without warranties of any kind.\n\n## Intellectual Property\nAll content on this Site is either fictitious or used for demonstration. No content may be relied upon for any real-world purpose.\n\n## For Sale Notice\nThis Site is intended solely to facilitate the sale of the domain name. If you are interested in purchasing, please use the contact information provided.\n\n## Changes to Terms\nWe reserve the right to update these Terms at any time without notice.\n`;

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="prose prose-lg">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
} 