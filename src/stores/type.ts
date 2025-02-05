/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Certification {
	name: string; // '情報処理技師1級'
	certificator:string; // '韓国産業人力管理公団'
	date: string; // '1996-07'
}

export interface BaseInfo {
	infoDate: string; // '2025-02-01T00:00:00Z'
	birth: string; // '1972-08-05T00:00:00Z'
	sex: string; //'male'
	graduated: string; // '韓国私立大学校 コンピュータ工学課
	certification?: Certification[];
	nearStation: string; // '小田急線相模大野駅'
}

export interface SkillInfo {
	category: string; // 'バックエンド'
	skills: string[]; // ['Nodejs','Typescript','Javascript',]
	department: string[]; // ['業務プロセスに基づいたシステムの要件分析',]
}

export interface AboutMe {
	document: string | string[]; // '......', | [ '.abc','.bcd' ]
}

export type ProjectRole = 'PM' | 'SE' | 'PG';
export type ProjectProcessCategory = '要件定義'|'基本設計'|'詳細設計'|'実装・単体'|'結合テスト'|'総合テスト'|'保守・運用';

export interface Period {
	start: string; // '2021-01-01T00:00:00Z'
	end: string; // '2022-01-01T00:00:00Z'
}

export interface ProcessCategory {
	name: ProjectProcessCategory;
	ativation: boolean;
}

export interface ProjectDetail {
	working: string[],
	earnedSkill: string[],
	comment: string[],
}

export interface CareerHistory {
	no: number;
	period: Period;
	projectName: string;
	role: ProjectRole;
	teamMembers: number
	projectMembers: number;
	lang: string[]; // ['Javascript','Typescript']
	database: string[]; // ['DynamoDB', 'Mysql']
	osCloud: string[]; // ['aws','ecs']
	frame: string[]; // ['Nodejs','Expressjs','Reactjs']
	etc: string[]; // ['docker','Github','githubAction','slac']
	process: ProcessCategory[]; // [{name:'要件定義',activation: true} as ProcessCategory]
	detail?: ProjectDetail;
}

// 個人プロジェクト用
export interface ProjectRef {
	url: string;
	screenShot: {
    screenShotAlt: string;
    filename: string;
    url: string;
  }
}

export interface MyProject {
	no: number;
	period: Period;
	projectName: string;
	developEnv: string | string[];
	purpose: string | string[]; // 
	comment: string | string[];
  ref: ProjectRef;
}

export interface CareerInfo {
  baseInfo: BaseInfo;
  skills: SkillInfo;
  aboutMe: AboutMe;
  careerHist: CareerHistory[];
  myProject: MyProject[];
}

export interface UserInfo {
	"id": number;
	"name": string;
	"username": string;
	"email": string;
	"address": {
		"street": string;
		"suite": string;
		"city": string;
		"zipcode": string;
		"geo": {
			"lat": string;
			"lng": string;
		}
	},
	"phone": string;
	"website": string;
	"company": {
		"name": string;
		"catchPhrase": string;
		"bs": string;
	}
}	
