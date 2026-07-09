import { User } from "../models/user.js"

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ error: "user not found" })
        return res.json(user);
    } catch (error) {
        return res.status(400).json({ error: "Invalid ID format" });
    }
}

const handleCreateUserById = async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All fields are req..." });
    }

    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })

    return res.status(201).json({ msg: "success", id: result._id })
}

const handleUpdateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedUser) return res.status(404).json({ error: "user not found" });
        return res.json({ status: "success", data: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const handleReplaceUserById = async (req, res) => {
    try {
        const body = req.body;
        if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
            return res.status(400).json({ msg: "All fields are required for a PUT replacement" });
        }

        const updatedUser = await User.findOneAndReplace(
            { _id: req.params.id },
            {
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                gender: body.gender,
                job_title: body.job_title
            },
            { new: true, upsert: true }
        );

        return res.json({ status: "success", data: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const handleDeleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) return res.status(404).json({ error: "user not found" });
        return res.json({ status: "success", msg: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


export { handleGetAllUsers, handleGetUserById, handleCreateUserById, handleUpdateUserById, handleReplaceUserById, handleDeleteUserById }