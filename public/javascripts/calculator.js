module.exports.calculate = function (first_num, second_num, operator) {
    var result_num;

    if (first_num === "") {
        return "Ô 'Số thứ nhất' rỗng";
    }

    if (second_num === "") {
        return "Ô 'Số thứ hai' rỗng";
    }

    if (isRealNum(first_num) === 0) {
        return "Giá trị nhập ở ô 'Số thứ nhất' không phải là số thực";
    }

    if (isRealNum(second_num) === 0) {
        return "Giá trị nhập ở ô 'Số thứ hai' không phải là số thực";
    }

    if (first_num.indexOf("/") !== -1) {
        let res = first_num.split("/");

        if (res[1] === "0") {
            return "Giá trị nhập ở ô 'Số thứ nhất' không hợp lệ";
        }

        let temp = parseFloat(res[0]) / parseFloat(res[1]);
        first_num = temp.toString();
    }

    if (second_num.indexOf("/") !== -1) {
        let res = second_num.split("/");

        if (res[1] === "0") {
            return "Giá trị nhập ở ô 'Số thứ hai' không hợp lệ";
        }

        let temp = parseFloat(res[0]) / parseFloat(res[1]);
        second_num = temp.toString();
    }

    if (operator === "") {
        return "Phép tính chưa được chọn";
    }

    if (operator === "add") {
        result_num = parseFloat(first_num) + parseFloat(second_num);
    }

    if (operator === "minus") {
        result_num = parseFloat(first_num) - parseFloat(second_num);
    }

    if (operator === "mul") {
        result_num = parseFloat(first_num) * parseFloat(second_num);
    }

    if (operator === "div") {
        if (second_num === "0") { 
            return "Mẫu số không được bằng 0";
        }

        result_num = parseFloat(first_num) / parseFloat(second_num);
    }

    return result_num;
}

function isRealNum(value) {
    var countDotCha = 0;
    var countDivCha = 0;
    var checkRealNum = 1;

    for (let i = 0; i < value.length; i++) {
        if (value[i] < "0" || value[i] > "9") {
            if (value[i] === '-' && i === 0) {
                continue;
            }

            if (value[i] === "." && i !== value.length - 1 && countDotCha === 0 && countDivCha === 0) {
                countDotCha++;
                continue;
            }

            if (value[i] === "/" && i !== value.length - 1 && countDivCha === 0 && countDotCha === 0) {
                countDivCha++;
                continue;
            }

            checkRealNum = 0;
            break;
        }
    }

    return checkRealNum;
}
