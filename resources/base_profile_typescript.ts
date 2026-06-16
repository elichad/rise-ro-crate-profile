// @ts-nocheck

/** A person */
export interface Person {
    "@id": string;
    "@type": "Person";
    /** Given name */
    givenName?: string;
    /** Family name */
    familyName?: string;
    /** Full name */
    name: string;
    /** Alternate name */
    alternateName?: string;
    /** Affiliated organization */
    affiliation?: EntityRef;
}

/** An organization */
export interface Organization {
    "@id": string;
    "@type": "Organization";
    /** Organization name */
    name: string;
    /** Alternate name */
    alternateName?: string;
    /** Location */
    location?: string;
    /** URL */
    url?: string;
}

/** A role assigned to a contributor */
export interface Role {
    "@id": string;
    "@type": "Role";
    /** Name of the role */
    roleName: string;
    /** Role description */
    description?: string;
    /** Role URL */
    url?: string;
    /** Contributors with this role */
    contributor: EntityRef[];
}

/** A creative work reference */
export interface CreativeWork {
    "@id": string;
    "@type": "CreativeWork";
    /** Name of the creative work */
    name: string;
    /** Description */
    description?: string;
    /** Short name */
    alternateName?: string;
    /** Citation URL */
    citation?: string;
    /** Version */
    version?: string;
    /** URL */
    url?: string;
}

/** A scholarly article (subtype of CreativeWork) */
export interface ScholarlyArticle extends Omit<CreativeWork, "@type"> {
    "@type": "ScholarlyArticle";
}

/** Archived webpage reference */
export interface WebPage {
    "@id": string;
    "@type": "WebPage";
    /** Page name */
    name: string;
    /** Creation date */
    dateCreated?: string;
    /** Publication date */
    datePublished?: string;
    /** Identifier */
    identifier?: string;
    /** Keywords */
    keywords?: string[];
    /** License */
    license?: string | EntityRef;
    /** Publisher */
    publisher?: string | EntityRef;
}

/** A license entity (CreativeWork) */
export interface License {
    "@id": string;
    "@type": "CreativeWork";
    /** License full name */
    name: string;
    /** SPDX short identifier */
    alternateName: string;
    /** License URL */
    url: string;
}

/** A file type/format definition */
export interface FileType {
    "@id": string;
    "@type": ["WebPage", "Standard"];
    /** Format name */
    name: string;
}
