import { Request, Response } from 'express'
import User from "../models/userModel"

export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name } = req.body
  try {
    const user = await User.create({ name })
    res.status(200).json(user)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getUsers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.findAll();
    res.status(200).json(users)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByPk(req.params.id)

    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    })

    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);

      res.status(200).json(updateUser)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    })

    if (deleted) {
      res.status(200).json({ message: "User deleted" })
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}