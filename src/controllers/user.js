import { PrismaClient } from '@prisma/client';

const  prisma = new PrismaClient();

const create = async (req, res) => {
    try{
        const {name, email} = req.body;

        let user = await prisma.user.findUnique({ where: {email}})

        if(user){
            return res.json({ error: "O E-mail inserido ja foi cadastrado"})
        }

        user = await prisma.user.create({
            data: {name, email}
        });
        return res.json(user).status(200);
    } catch (error){

    }
};

const UserController = {
    create
}

export { UserController };