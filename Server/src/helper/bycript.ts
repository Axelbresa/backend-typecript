import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; // El número de veces que bcrypt ejecutará el algoritmo de hash
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (plainPassword:any, hashedPassword:any) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
  };