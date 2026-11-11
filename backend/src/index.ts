import express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import adminRoutes from './routes/admin.route.js'
import authRoutes from './routes/auth.route.js'
import songRoutes from './routes/song.route.js'
import albumRoutes from './routes/album.route.js'
import statsRoutes from './routes/statsRoute.js'

dotenv.config();

const app = express();
const PORT = Number(process.env["PORT"]) || 5000;

// global middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// create api route

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes)
app.use('/api/album', albumRoutes)
app.use('/api/stats', statsRoutes)

app.listen(PORT, () => {
    console.log(`server is running:${PORT}`);
});
