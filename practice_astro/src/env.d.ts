/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare const myString: string;
declare function myFunction(): boolean;
interface Window {
    myFunction(): boolean;
}