import { Request, Response } from "express";

export const getAll = (req: Request, res: Response): void => {
    res.status(200).json({ message: "hola usuario1" });
    //res.send("UNACH")
};

export const getAll1 = (req: Request, res: Response): void => {
    res.status(200).json({ message: "hola usuario2" });
    //res.send("UNACH")
};