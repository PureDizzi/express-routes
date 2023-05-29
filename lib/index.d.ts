import express from 'express';
type options = {
    basePath?: string;
    display?: string;
};
declare const expressRoutes: (app: express.Application, options?: options | undefined) => false | IterableIterator<[string, string[]]>;
export default expressRoutes;
