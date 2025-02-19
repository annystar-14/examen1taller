import { Request, Response } from "express";

export const getAll = (req: Request, res: Response): void => {
    res.status(200).json([
        { id: 1, nombre: "juan perez", email: "juan@example.com" },
        { id: 2, nombre: "ana garcia", email: "ana@example.com" },
        { id: 3, nombre: "carlos lopez", email: "carlos@example.com" }
    ]);
};

export const getAll1 = (req: Request, res: Response): void => {
    res.status(200).json({ message: "hola usuario2" });
    //res.send("UNACH")
};