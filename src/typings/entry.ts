/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A single entry in the time sheet
 */
export interface Entry {
  /**
   * A short description of the work done
   */
  description: string;
  /**
   * Time spent on the project, expressed as minutes
   */
  minutes: number;
  date: string;
  billable: boolean;
  /**
   * Last modification date
   */
  modifiedAt: string;
  /**
   * Creation date
   */
  createdAt: string;
  _links?: unknown;
}
