// Auto-generated from profile_definition.json
// Version: 1.0.0

/** Reference to another entity by @id */
export interface EntityRef {
  "@id": string;
}

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

/** Apache License 2.0 */
export const APACHE_2_0: License = {
    "@id": "https://www.apache.org/licenses/LICENSE-2.0",
    "@type": "CreativeWork",
    name: "Apache License 2.0",
    alternateName: "Apache-2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0",
};

/** Creative Commons Attribution 4.0 International */
export const CC_BY_4_0: License = {
    "@id": "https://creativecommons.org/licenses/by/4.0/legalcode",
    "@type": "CreativeWork",
    name: "Creative Commons Attribution 4.0 International",
    alternateName: "CC-BY-4.0",
    url: "https://creativecommons.org/licenses/by/4.0/legalcode",
};

/** Creative Commons Attribution Share Alike 4.0 International */
export const CC_BY_SA_4_0: License = {
    "@id": "https://creativecommons.org/licenses/by-sa/4.0/legalcode",
    "@type": "CreativeWork",
    name: "Creative Commons Attribution Share Alike 4.0 International",
    alternateName: "CC-BY-SA-4.0",
    url: "https://creativecommons.org/licenses/by-sa/4.0/legalcode",
};

/** Creative Commons Zero v1.0 Universal */
export const CC0_1_0: License = {
    "@id": "https://creativecommons.org/publicdomain/zero/1.0/legalcode",
    "@type": "CreativeWork",
    name: "Creative Commons Zero v1.0 Universal",
    alternateName: "CC0-1.0",
    url: "https://creativecommons.org/publicdomain/zero/1.0/legalcode",
};

/** GNU General Public License v3.0 or later */
export const GPL_3_0_OR_LATER: License = {
    "@id": "https://www.gnu.org/licenses/gpl-3.0.html",
    "@type": "CreativeWork",
    name: "GNU General Public License v3.0 or later",
    alternateName: "GPL-3.0-or-later",
    url: "https://www.gnu.org/licenses/gpl-3.0.html",
};

/** MIT License */
export const MIT: License = {
    "@id": "https://opensource.org/licenses/MIT",
    "@type": "CreativeWork",
    name: "MIT License",
    alternateName: "MIT",
    url: "https://opensource.org/licenses/MIT",
};

/** Array of all available license instances defined in this profile. */
export const AvailableLicenses: License[] = [APACHE_2_0, CC_BY_4_0, CC_BY_SA_4_0, CC0_1_0, GPL_3_0_OR_LATER, MIT];

/** Conceptualization: Ideas; formulation or evolution of overarching research goals and aims. */
export const CONCEPTUALIZATION: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/conceptualization/",
    "@type": "Role",
    roleName: "Conceptualization",
    description: "Ideas; formulation or evolution of overarching research goals and aims.",
    url: "https://credit.niso.org/contributor-roles/conceptualization/",
};

/** Data curation: Management activities to annotate (produce metadata), scrub data and maintain research data (including software code, where it is necessary for interpreting the data itself) for initial use and later reuse. */
export const DATA_CURATION: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/data-curation/",
    "@type": "Role",
    roleName: "Data curation",
    description: "Management activities to annotate (produce metadata), scrub data and maintain research data (including software code, where it is necessary for interpreting the data itself) for initial use and later reuse.",
    url: "https://credit.niso.org/contributor-roles/data-curation/",
};

/** Formal analysis: Application of statistical, mathematical, computational, or other formal techniques to analyse or synthesize study data. */
export const FORMAL_ANALYSIS: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/formal-analysis/",
    "@type": "Role",
    roleName: "Formal analysis",
    description: "Application of statistical, mathematical, computational, or other formal techniques to analyse or synthesize study data.",
    url: "https://credit.niso.org/contributor-roles/formal-analysis/",
};

/** Funding acquisition: Acquisition of the financial support for the project leading to this publication. */
export const FUNDING_ACQUISITION: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/funding-acquisition/",
    "@type": "Role",
    roleName: "Funding acquisition",
    description: "Acquisition of the financial support for the project leading to this publication.",
    url: "https://credit.niso.org/contributor-roles/funding-acquisition/",
};

/** Investigation: Conducting a research and investigation process, specifically performing the experiments, or data/evidence collection. */
export const INVESTIGATION: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/investigation/",
    "@type": "Role",
    roleName: "Investigation",
    description: "Conducting a research and investigation process, specifically performing the experiments, or data/evidence collection.",
    url: "https://credit.niso.org/contributor-roles/investigation/",
};

/** Methodology: Development or design of methodology; creation of models. */
export const METHODOLOGY: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/methodology/",
    "@type": "Role",
    roleName: "Methodology",
    description: "Development or design of methodology; creation of models.",
    url: "https://credit.niso.org/contributor-roles/methodology/",
};

/** Project administration: Management and coordination responsibility for the research activity planning and execution. */
export const PROJECT_ADMINISTRATION: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/project-administration/",
    "@type": "Role",
    roleName: "Project administration",
    description: "Management and coordination responsibility for the research activity planning and execution.",
    url: "https://credit.niso.org/contributor-roles/project-administration/",
};

/** Resources: Provision of study materials, reagents, materials, patients, laboratory samples, animals, instrumentation, computing resources, or other analysis tools. */
export const RESOURCES: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/resources/",
    "@type": "Role",
    roleName: "Resources",
    description: "Provision of study materials, reagents, materials, patients, laboratory samples, animals, instrumentation, computing resources, or other analysis tools.",
    url: "https://credit.niso.org/contributor-roles/resources/",
};

/** Software: Programming, software development; designing computer programs; implementation of the computer code and supporting algorithms; testing of existing code components. */
export const SOFTWARE: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/software/",
    "@type": "Role",
    roleName: "Software",
    description: "Programming, software development; designing computer programs; implementation of the computer code and supporting algorithms; testing of existing code components.",
    url: "https://credit.niso.org/contributor-roles/software/",
};

/** Supervision: Oversight and leadership responsibility for the research activity planning and execution, including mentorship external to the core team. */
export const SUPERVISION: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/supervision/",
    "@type": "Role",
    roleName: "Supervision",
    description: "Oversight and leadership responsibility for the research activity planning and execution, including mentorship external to the core team.",
    url: "https://credit.niso.org/contributor-roles/supervision/",
};

/** Validation: Verification, whether as a part of the activity or separate, of the overall replication/reproducibility of results/experiments and other research outputs. */
export const VALIDATION: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/validation/",
    "@type": "Role",
    roleName: "Validation",
    description: "Verification, whether as a part of the activity or separate, of the overall replication/reproducibility of results/experiments and other research outputs.",
    url: "https://credit.niso.org/contributor-roles/validation/",
};

/** Visualization: Preparation, creation and/or presentation of the published work, specifically visualization/data presentation. */
export const VISUALIZATION: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/visualization/",
    "@type": "Role",
    roleName: "Visualization",
    description: "Preparation, creation and/or presentation of the published work, specifically visualization/data presentation.",
    url: "https://credit.niso.org/contributor-roles/visualization/",
};

/** Writing - original draft: Preparation, creation and/or presentation of the published work, specifically writing the initial draft (including substantive translation). */
export const WRITING_ORIGINAL_DRAFT: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/writing-original-draft/",
    "@type": "Role",
    roleName: "Writing - original draft",
    description: "Preparation, creation and/or presentation of the published work, specifically writing the initial draft (including substantive translation).",
    url: "https://credit.niso.org/contributor-roles/writing-original-draft/",
};

/** Writing - review & editing: Preparation, creation and/or presentation of the published work by those from the original research group, specifically critical review, commentary or revision - including pre- or post-publication stages. */
export const WRITING_REVIEW_AND_EDITING: Omit<Role, 'contributor'> = {
    "@id": "https://credit.niso.org/contributor-roles/writing-review-editing/",
    "@type": "Role",
    roleName: "Writing - review & editing",
    description: "Preparation, creation and/or presentation of the published work by those from the original research group, specifically critical review, commentary or revision - including pre- or post-publication stages.",
    url: "https://credit.niso.org/contributor-roles/writing-review-editing/",
};

/** Array of all CRediT contributor role instances defined in this profile. */
export const AvailableCreditRoles: Omit<Role, 'contributor'>[] = [CONCEPTUALIZATION, DATA_CURATION, FORMAL_ANALYSIS, FUNDING_ACQUISITION, INVESTIGATION, METHODOLOGY, PROJECT_ADMINISTRATION, RESOURCES, SOFTWARE, SUPERVISION, VALIDATION, VISUALIZATION, WRITING_ORIGINAL_DRAFT, WRITING_REVIEW_AND_EDITING];

/** JSON Data Format */
export const JSONDataFormat: FileType = {
    "@id": "https://www.nationalarchives.gov.uk/PRONOM/fmt/817",
    "@type": ["WebPage", "Standard"],
    name: "JSON Data Format",
};

/** Acrobat PDF 1.5 */
export const PDF15Format: FileType = {
    "@id": "https://www.nationalarchives.gov.uk/PRONOM/fmt/19",
    "@type": ["WebPage", "Standard"],
    name: "Acrobat PDF 1.5",
};

/** Array of all AvailableFileTypes instances defined in this profile. */
export const AvailableFileTypes: FileType[] = [JSONDataFormat, PDF15Format];

/** Entity describing the profile this crate conforms to. */
export interface ProfileDefinition {
  "@id": string;
  "@type": ["CreativeWork", "Profile"];
  name: string;
  alternateName?: string;
  version: string;
}

/** Prefilled profile definition for Research Infrastructure Shareable Experiments RO-Crate Profile v1.0.0 */
export const RISE_RO_CRATE_PROFILE: ProfileDefinition = {
    "@id": "https://tumi8.github.io/rise-ro-crate-profile/1.0.0/",
    "@type": ["CreativeWork", "Profile"],
    name: "Research Infrastructure Shareable Experiments RO-Crate Profile",
    alternateName: "RISE RO-Crate Profile",
    version: "1.0.0",
};

/** The root data entity that represents the crate, as defined by RO-Crate. */
export interface RootDataEntry extends Omit<Dataset, "@type"> {
  "@id": string;
  "@type": "RootDataEntry";
  /** Name of the crate */
  name: string;
  /** Description of the crate */
  description?: string;
  /** Creation timestamp */
  dateCreated: string;
  /** Modification timestamp */
  dateModified: string;
  /** Publication timestamp */
  datePublished: string;
  /** Authors of the crate */
  author: EntityRef[];
  /** Authors of the crate with assigned roles */
  contributor?: EntityRef[];
  /** Keywords of the crate */
  keywords?: string[];
  /** License of the crate */
  license?: EntityRef | string;
  /** If copies of the crate are available online */
  archivedAt?: (EntityRef | string)[];
  /** If the crate is used in publications */
  citation?: EntityRef[];
  /** If the crate contains a single experiment (mutually exclusive with mentions) */
  mainEntity?: EntityRef;
  /** If the crate contains multiple experiments (mutually exclusive with mainEntity) */
  mentions?: EntityRef[];
  /** Profile this crate conforms to */
  conformsTo: EntityRef;
}

/** An experiment conducted in a research infrastructure. */
export interface Experiment {
  "@id": string;
  "@type": "Experiment";
  /** Name of the experiment (required if the crate contains multiple experiments) */
  name?: string;
  /** Description of the experiment */
  description?: string;
  /** Creation timestamp (required if the crate contains multiple experiments) */
  dateCreated?: string;
  /** Modification timestamp (required if the crate contains multiple experiments) */
  dateModified?: string;
  /** Authors of the experiment (required if the crate contains multiple experiments) */
  author?: EntityRef[];
  /** Authors of the experiment with assigned roles */
  contributor?: EntityRef[];
  /** Keywords of the experiment */
  keywords?: string[];
  /** If the identifier is a URI to a file */
  encodingFormat?: EntityRef | string;
  /** Executed commands on the experiment nodes */
  executedCommands: EntityRef[];
  /** Links to result data of the executed commands */
  resultData?: EntityRef[];
  /** Experiment nodes that are part of the experiment */
  experimentNodes: EntityRef[];
  /** Link to a file that describes the experiment workflow */
  experimentWorkflow?: EntityRef;
  /** Links to additional data that is relevant to the experiment */
  supplementaryData?: EntityRef[];
  /** OS images that are part of the experiment */
  includedOSImages?: EntityRef[];
  /** Links to energy measurement data of the executed commands */
  energyMeasurements?: EntityRef[];
  /** Software or tools used for the experiment management and execution */
  experimentController: EntityRef[];
}

/** An RO-Crate data entity for files. Defined as an alias for the Schema.org MediaObject type, listed here for reference. */
export interface File {
  "@id": string;
  "@type": "File";
  /** Filename or human-readable name */
  name: string;
  /** Description of the file */
  description?: string;
  /** Keywords of the file */
  keywords?: string[];
  /** File size in bytes */
  contentSize: string;
  /** Creation timestamp */
  dateCreated: string;
  /** Modification timestamp */
  dateModified: string;
  /** IANA mediatype or link to contextual entry */
  encodingFormat?: EntityRef | string;
  /** If the file is part of a CommandFile or LoopRun */
  exampleOfWork?: EntityRef;
}

/** An RO-Crate data entity for directories, listed here for reference. */
export interface Dataset {
  "@id": string;
  "@type": "Dataset";
  /** Directory name or human-readable name */
  name: string;
  /** Description of the directory */
  description?: string;
  /** Keywords of the directory */
  keywords?: string[];
  /** Directory size in bytes */
  contentSize?: string;
  /** Creation timestamp */
  dateCreated: string;
  /** Modification timestamp */
  dateModified: string;
  /** Links to files in the directory */
  hasPart?: EntityRef[];
  /** If the directory is part of a CommandFile or LoopRun */
  exampleOfWork?: EntityRef;
}

/** A file containing commands to be executed on an experiment node. */
export interface CommandFile extends Omit<File, "@type"> {
  "@id": string;
  "@type": "CommandFile";
  /** Timestamp when the command starts */
  startTime: string;
  /** Timestamp when the command finishes */
  endTime: string;
  /** Duration of the command */
  duration: string;
  /** Experiment node executing the command */
  executedOn: EntityRef;
  /** Link to a variable set file */
  variableSet?: EntityRef;
  /** Return code or link to the status file */
  status: EntityRef | string;
  /** Link to the stdout file */
  stdout: EntityRef;
  /** Link to the stderr file */
  stderr: EntityRef;
  /** Links to result data */
  resultData?: EntityRef[];
  /** Links to invoked subcommands */
  invokedCommands?: EntityRef[];
  /** If the command is invoked by a parent command */
  invokedBy?: EntityRef;
  /** Links to energy measurement data */
  energyMeasurements?: EntityRef[];
}

/** A command file that iterates over an array of parameters. */
export interface CommandFileLooped extends Omit<File, "@type"> {
  "@id": string;
  "@type": "CommandFileLooped";
  /** Timestamp when the command starts */
  startTime: string;
  /** Timestamp when the command finishes */
  endTime: string;
  /** Duration of the command */
  duration: string;
  /** Experiment node executing the command */
  executedOn: EntityRef;
  /** Link to a variable set file */
  variableSet?: EntityRef;
  /** Links to the individual loop runs */
  loopRuns: EntityRef[];
}

/** A single run of a looped command file. */
export interface LoopRun extends Omit<File, "@type"> {
  "@id": string;
  "@type": "LoopRun";
  /** Timestamp when the run starts */
  startTime: string;
  /** Timestamp when the run finishes */
  endTime: string;
  /** Duration of the run */
  duration: string;
  /** Link to the looped command file */
  runOfLoopedCommand: EntityRef;
  /** Return code or link to the status file */
  status: EntityRef | string;
  /** Link to the stdout file */
  stdout: EntityRef;
  /** Link to the stderr file */
  stderr: EntityRef;
  /** Links to result data */
  resultData?: EntityRef[];
  /** Links to invoked subcommands */
  invokedCommands?: EntityRef[];
  /** Links to energy measurement data */
  energyMeasurements?: EntityRef[];
}

/** A command file for bootstrapping an experiment node. */
export interface CommandFileBootstrap extends Omit<CommandFile, "@type"> {
  "@id": string;
  "@type": "CommandFileBootstrap";
}

/** A command file for setting up an experiment node. */
export interface CommandFileSetup extends Omit<CommandFile, "@type"> {
  "@id": string;
  "@type": "CommandFileSetup";
}

/** A command file for resetting an experiment node. */
export interface CommandFileReset extends Omit<CommandFile, "@type"> {
  "@id": string;
  "@type": "CommandFileReset";
  /** Link to the booted image */
  bootedImage: EntityRef;
  /** List of boot parameters */
  bootParameters?: string[];
  /** Links to invoked bootstrap commands */
  bootstrapCommands?: EntityRef[];
  /** Links to invoked setup commands */
  setupCommands?: EntityRef[];
}

/** An operating system image booted on an experiment node. */
export interface OSImage {
  "@id": string;
  "@type": "OSImage";
  /** Name of the image */
  name: string;
  /** Description of the image */
  description?: string;
  /** Size of the image */
  fileSize: string;
  /** If the image is available online */
  archivedAt?: EntityRef | string;
  /** Links to image data if included in the crate */
  hasPart?: EntityRef[];
}

/** A command file for copying data to an experiment node. */
export interface CommandFileCopy extends Omit<CommandFile, "@type"> {
  "@id": string;
  "@type": "CommandFileCopy";
  /** Source path of the data to be copied */
  sourcePath: string;
  /** Destination path of the data to be copied */
  destinationPath: string;
  /** If the data is copied recursively */
  recursiveCopy: boolean;
  /** Links to copied data if included in the crate */
  copiedData?: EntityRef[];
}

/** An experiment node of a research infrastructure. */
export interface ExperimentNode {
  "@id": string;
  "@type": "ExperimentNode";
  /** Hostname of the experiment node */
  name: string;
  /** Description of the experiment node */
  description?: string;
  /** Link to a hardware file of the experiment node */
  hardware?: EntityRef;
  /** Link to a network topology file of the experiment node */
  topology?: EntityRef;
  /** Link to a visualized network topology file of the experiment node */
  visualizedTopology?: EntityRef;
}
