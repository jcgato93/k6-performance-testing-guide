# English
# Types of Tests and Key Considerations

## What Performance Means in the Context of an API

- What will the API be used for? This knowledge will influence the type of tests you should conduct.

To be more precise, there are four types of tests, which are not applicable in every case. It’s important to define the scope and purpose of your system. Having this clarity will also help you define success or failure criteria for the tests.

Generally, you’ll want to determine the normal and acceptable traffic per instance for your API, along with the acceptable response times for each request.

## Types of Tests

### Load Testing

- This type of test focuses on determining the system's behavior under normal and maximum load conditions. In other words, it aims to find the maximum number of users the system can handle without performance degradation.

### Stress Testing

- This type of test focuses on determining the system's behavior under extreme conditions. It seeks to find the maximum number of users the system can support before it fails.

### Soak Testing

- This test aims to determine the system’s behavior under normal and maximum load over a prolonged period. It evaluates whether the system can maintain peak performance without degradation over time. A good example is identifying performance degradation over time due to issues like memory leaks, where system performance deteriorates as memory fills up and is not released, eventually slowing down the system.

### Spike Testing

- This type of test assesses the system’s behavior under normal and maximum load for a short burst of time. It examines if the system can handle an intense, short-lived peak in load without performance degradation. For instance, ticket sales for concerts or sporting events require the system to handle a brief but intense load.

## Key Considerations

- It's important to remember that API performance depends not only on infrastructure but also on the API's implementation. Therefore, when conducting performance tests, you should consider the API's code.

- For example, how would performance change if the database is switched or if an endpoint implementation is altered? Other factors, such as using caching or implementing a message queue system, can also impact API performance.



# Español
# Tipos de tests y que tener en cuenta

## Que significa el performance (rendimiento) en el contexto de un API

- Que uso se le dará al API ?, ya que dicho conocimiento influenciara
que tipo de test debes realizar.

Para ser mas precisos, hay cuatro tipos de tests, los cuales no son aplicables para
todos los casos, por lo que es importante definir el alcance y el uso de tu
sistema. También tener dicha claridad te ayudara a definir los criterios de éxito
o error en las pruebas.

Generalmente quieres definir en tu API, el trafico normal y aceptable por cada instancia
y los tiempos de respuesta aceptables de una petición.


## Tipos de tests

### Load Testing

- Este tipo de test se enfoca en determinar el comportamiento del sistema bajo
condiciones normales y de carga máxima. Es decir, se busca determinar el número
máximo de usuarios que el sistema puede soportar sin degradar el rendimiento.

### Stress Testing

- Este tipo de test se enfoca en determinar el comportamiento del sistema bajo
condiciones extremas. Es decir, se busca determinar el número máximo de usuarios
que el sistema puede soportar antes de fallar.

### Soak Testing

- Este tipo de test se enfoca en determinar el comportamiento del sistema bajo
condiciones normales y de carga máxima durante un periodo prolongado de tiempo.
Es decir, se busca determinar si el sistema puede soportar la carga máxima durante
un periodo prolongado de tiempo sin degradar el rendimiento. Un ejemplo de la 
utilidad de este tipo de test es para determinar si un sistema va degradando su
rendimiento con el tiempo, como cuando se tiene una fuga de memoria, en donde
el sistema va perdiendo rendimiento con el tiempo dado que la memoria se va
llenando y no se libera, provocando que el sistema se vuelva lento.

### Spike Testing

- Este tipo de test se enfoca en determinar el comportamiento del sistema bajo
condiciones normales y de carga máxima durante un periodo corto de tiempo.
Es decir, se busca determinar si el sistema puede soportar la carga máxima durante
un periodo corto de tiempo sin degradar el rendimiento. Un ejemplo de esto es la venta
de boletos para un concierto o un evento deportivo. En este caso, el sistema debe
ser capaz de soportar la carga máxima durante un periodo corto pero intenso de tiempo.

## Que tener en cuenta

- Es importante tener en cuenta que el performance de un API no solo depende de
la infraestructura, sino también de la implementación del API. Por lo tanto, es
importante tener en cuenta el código del API al realizar tests de performance.

- Como por ejemplo, como cambiaría el rendimiento si se cambia la base de datos
o si se cambia la implementación de un endpoint. Otro caso seria el uso de cache
o la implementación de un sistema de colas. Todos estos factores pueden influenciar
el rendimiento de un API.