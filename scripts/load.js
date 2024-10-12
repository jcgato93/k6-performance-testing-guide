import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    // Numero de VUs que se van a simular en la prueba, los VUs son los usuarios virtuales que se van a simular.
    vus: 10,
    duration: '3m',
    thresholds: {
        http_req_failed: ['rate<0.01'], // 99% de las peticiones deben ser exitosas
        http_req_duration: ['p(95)<500'], // 95% de las peticiones deben ser menores a 500ms de tiempo de respuesta
    },
};

export default function () {
    const res = http.get("https://swapi.dev/api/people/30/", {headers: {Accepts: "application/json"}});
    check(res, {
        'status was 200': (r) => r.status === 200,
        'duration was < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1);
}