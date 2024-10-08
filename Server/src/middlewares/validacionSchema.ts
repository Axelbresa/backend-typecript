import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Definir interfaz que puede ser implementada por clases de validación
interface newValitaSystem {
    getValidacion(req: Request, res: Response, next: NextFunction): void;
}

// Clase base que realiza la validación usando express-validator
class oldValite {
    validate(req: Request, res: Response, next: NextFunction): void {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        next();
    }
}

// Clase que utiliza una instancia de oldValite para delegar la validación
export class validateSchema implements newValitaSystem {
    private valicion: oldValite;

    // Recibe una instancia de oldValite o cualquier clase que implemente la interfaz
    constructor(valicion: oldValite) {
        this.valicion = valicion;
    }

    // Método para delegar la validación
    getValidacion(req: Request, res: Response, next: NextFunction): void {
        this.valicion.validate(req, res, next);
    }
}

// Crear una instancia de `oldValite`
const oldValiteInstance = new oldValite();

// Instanciar `validateSchema` con `oldValite`
const valicion = new validateSchema(oldValiteInstance);

// Uso en una ruta o middleware
export const validateMiddleware = (req: Request, res: Response, next: NextFunction) => {
    valicion.getValidacion(req, res, next);
};

