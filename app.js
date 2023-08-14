console.log(document.querySelector('#colorPicker').value);
//テキストの横にカラーコードを表示させるためにテンプレート文字列で代入する
document.querySelector('#colorText').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;

//定数の宣言
const name = 'Mama';
console.log(name);

//カラーコードとテキストを定数にまとめる
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');
//上のコードより短く書ける
text.textContent = `カラーコード:${color.value}`;

//colorBgという関数を指定
const colorBg = () => {
    //選択したカラーを背景色にする
    document.body.style.backgroundColor = color.value;

    // もし白が選択された場合、(white)と表示する
    if (color.value === '#ffffff') {
        text.textContent = `カラーコード: ${color.value} (white)`;
    }

    // もし黒が選択された場合、(black)と表示する
    else if (color.value === '#000000') {
        text.textContent = `カラーコード: ${color.value} (black)`;
    }

    // それ以外はカラーコードのみの表示にする
    else {
        text.textContent = `カラーコード:${color.value}`;
    }
}
//カラーピッカーが選択されたらカラーコードを表示するようにイベントを指定する
color.addEventListener('input', colorBg);