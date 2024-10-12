import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    // Numero de VUs que se van a simular en la prueba, los VUs son los usuarios virtuales que se van a simular.
    vus: 10,
    thresholds: {
        http_req_failed: ['rate<0.01'], // 99% de las peticiones deben ser exitosas
        http_req_duration: ['p(95)<500'], // 95% de las peticiones deben ser menores a 500ms de tiempo de respuesta
    },
    // Para definir una carga de trabajo más compleja, se puede definir una secuencia de etapas.
    // Cada etapa puede tener una duración y un número de VUs.
    // Esto con el fin de simular un escenario más realista y conocer el comportamiento de la aplicación en diferentes situaciones.
    stages: [
        // Nivel 1
        { duration: '1m', target: 100 },
        { duration: '2m', target: 100 },
        // Nivel 2
        { duration: '1m', target: 200 },
        { duration: '2m', target: 200 },
        // Nivel 3
        { duration: '1m', target: 500 },
        { duration: '2m', target: 500 },
        // coll down
        { duration: '1m', target: 0 },
    ],
};

export default function () {
    const res = http.get("https://swapi.dev/api/people/30/", {headers: {Accepts: "application/json"}});
    check(res, {
        'status was 200': (r) => r.status === 200,
        'duration was < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1);
}