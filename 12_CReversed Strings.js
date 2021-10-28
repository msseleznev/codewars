    /*Метод split() принимает на вход строку и преобразует в массив, разбивая ее по разделителю.
      Метод reverse() переворачивает элементы массива. Первый элемент становится последним, последний — первым.
      Метод join() соединяет все элементы массива в строку.*/
function solution(str) {
    return str.split("").reverse().join("");
}

    function stringToArray(string){

        return string.split("");

    }

    function reverseList(list) {
        return  list.reverse()
    }