// Función para multiplicar matrices
function multiplyMatrices() {
    // Obtén los valores de las matrices desde el formulario
    const matrixA = parseMatrix(document.getElementById('matrixA').value);
    const matrixB = parseMatrix(document.getElementById('matrixB').value);

    // Verifica si las matrices se han ingresado correctamente
    if (!matrixA || !matrixB) {
        document.getElementById('resultado').textContent = "Por favor, ingresa matrices válidas.";
        return;
    }

    // Verifica si las matrices pueden ser multiplicadas
    if (matrixA[0].length !== matrixB.length) {
        document.getElementById('resultado').textContent = "Las matrices no se pueden multiplicar: el número de columnas de la primera matriz debe coincidir con el número de filas de la segunda matriz.";
        return;
    }

    // Multiplica las matrices
    const result = multiply(matrixA, matrixB);
    displayMatrix(result);
}

// Convierte una cadena en una matriz
function parseMatrix(input) {
    try {
        // Convierte el texto en una matriz
        const rows = input.trim().split('\n');
        return rows.map(row => row.split(',').map(Number));
    } catch (error) {
        return null;
    }
}

// Multiplica dos matrices
function multiply(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const colsB = B[0].length;

    // Crea la matriz resultado
    const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    // Multiplica las matrices
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

// Muestra la matriz en el elemento de resultados
function displayMatrix(matrix) {
    const formattedMatrix = matrix.map(row => row.join(' ')).join('\n');
    document.getElementById('resultado').textContent = `Resultado:\n${formattedMatrix}`;
}
