import { Request, Response } from "express";
import { Ddd } from "../models/Ddd";
import { Plan } from "../models/Plans";
import { Tax } from "../models/Tax";

export const getTaxes = async (req: Request, res: Response) => {
    let taxes = await Tax.findAll()

    res.json({tax: taxes})
}

export const getPlans = async (req: Request, res: Response) => {
    let plans = await Plan.findAll()

    res.json({plans})
}

export const getDdds = async (req: Request, res: Response) => {
    let ddd = await Ddd.findAll()

    res.json({ddd})
}