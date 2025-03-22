import postgres from 'postgres';

export type User = {
  id: string;
  name: string; 
  email: string;
  password: string;
};

// Initialize PostgreSQL connection
const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: { rejectUnauthorized: false },
  max: 10,
  idle_timeout: 20,
  connect_timeout: 30,
});

// Check if a username and password combination exists
export async function checkCredentials(name: string, password: string): Promise<boolean> {
  try {
    const result = await sql`
      SELECT EXISTS (
        SELECT 1 
        FROM users 
        WHERE name = ${name} AND password = ${password}
      ) AS "exists"
    `;
    return result[0].exists as boolean;
  } catch (error) {
    console.error('Error checking credentials:', error);
    throw error;
  }
}