import { Redis } from 'ioredis'
import { env } from '../env'

export const redis = new Redis(env.UPSTASH_REDIS_REST_URL)