(function (window, undefined) {

//第一个功能的
const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const imageContainer = document.getElementById('imageContainer');
    const checkbox = document.getElementById('exactMatchCheckbox');
    imageall=[
        'img/image1.png','img/image3.png','img/image5.png','img/image7.png','img/image9.png','img/image11.png','img/image13.png','img/image15.png','img/image17.png','img/image19.png','img/image21.png','img/image23.png','img/image25.png','img/image27.png','img/image29.png','img/image31.png','img/image33.png','img/image35.png','img/image37.png','img/image39.png','img/image41.png','img/image43.png','img/image45.png','img/image47.png','img/image49.png','img/image51.png','img/image53.png','img/image55.png','img/image57.png','img/image59.png','img/image61.png','img/image63.png','img/image65.png','img/image67.png','img/image69.png','img/image71.png','img/image73.png','img/image75.png','img/image77.png','img/image79.png','img/image81.png','img/image83.png','img/image85.png','img/image87.png','img/image89.png','img/image91.png','img/image93.png','img/image95.png','img/image97.png','img/image99.png','img/image101.png','img/image103.png','img/image105.png','img/image107.png','img/image109.png','img/image111.png','img/image113.png','img/image115.png','img/image117.png','img/image119.png','img/image121.png','img/image123.png','img/image125.png','img/image127.png','img/image129.png','img/image131.png','img/image133.png','img/image135.png','img/image137.png','img/image139.png','img/image141.png','img/image143.png','img/image145.png','img/image147.png','img/image149.png','img/image151.png','img/image153.png','img/image155.png','img/image157.png','img/image159.png','img/image161.png','img/image163.png','img/image165.png','img/image167.png','img/image169.png','img/image171.png','img/image173.png','img/image175.png','img/image177.png','img/image179.png','img/image181.png','img/image183.png','img/image185.png','img/image187.png','img/image189.png','img/image199.png','img/image201.png','img/image203.png','img/image205.png','img/image207.png','img/image209.png'
    ]
    const imageMap = {
        "png": [
        'img/image1.png','img/image3.png','img/image5.png','img/image7.png','img/image9.png','img/image11.png','img/image13.png','img/image15.png','img/image17.png','img/image19.png','img/image21.png','img/image23.png','img/image25.png','img/image27.png','img/image29.png','img/image31.png','img/image33.png','img/image35.png','img/image37.png','img/image39.png','img/image41.png','img/image43.png','img/image45.png','img/image47.png','img/image49.png','img/image51.png','img/image53.png','img/image55.png','img/image57.png','img/image59.png','img/image61.png','img/image63.png','img/image65.png','img/image67.png','img/image69.png','img/image71.png','img/image73.png','img/image75.png','img/image77.png','img/image79.png','img/image81.png','img/image83.png','img/image85.png','img/image87.png','img/image89.png','img/image91.png','img/image93.png','img/image95.png','img/image97.png','img/image99.png','img/image101.png','img/image103.png','img/image105.png','img/image107.png','img/image109.png','img/image111.png','img/image113.png','img/image115.png','img/image117.png','img/image119.png','img/image121.png','img/image123.png','img/image125.png','img/image127.png','img/image129.png','img/image131.png','img/image133.png','img/image135.png','img/image137.png','img/image139.png','img/image141.png','img/image143.png','img/image145.png','img/image147.png','img/image149.png','img/image151.png','img/image153.png','img/image155.png','img/image157.png','img/image159.png','img/image161.png','img/image163.png','img/image165.png','img/image167.png','img/image169.png','img/image171.png','img/image173.png','img/image175.png','img/image177.png','img/image179.png','img/image181.png','img/image183.png','img/image185.png','img/image187.png','img/image189.png','img/image199.png','img/image201.png','img/image203.png','img/image205.png','img/image207.png','img/image209.png'
        ],
        "人": [
        'img/image1.png','img/image3.png','img/image5.png','img/image7.png','img/image9.png','img/image11.png','img/image13.png','img/image15.png'
        ],
        "男人": [
            'img/image201.png','img/image181.png','img/image159.png','img/image143.png','img/image137.png','img/image3.png','img/image5.png'

        ],
        "女人": [
            'img/image55.png','img/image59.png','img/image157.png','img/image167.png','img/image199.png','img/image183.png','img/image9.png'

        ],
        "花": [
            'img/image75.png','img/image77.png','img/image83.png','img/image85.png'

        ],
        "汽车": [
            'img/image73.png'

        ],
        "水果": [
            'img/image89.png'
        ],
        "晴天娃娃": [
            'img/image87.png'
        ],
        "汽水": [
            'img/image107.png'

        ],
        "水": [
            'img/image103.png','img/image105.png','img/image107.png'

        ],
        "垃圾桶": [
            'img/image101.png'       
        ],
        "动物": [
            'img/image95.png'
        ],
        "牛": [
            'img/image95.png'
        ],
        "食物": [
            'img/image89.png','img/image97.png','img/image99.png','img/image103.png','img/image105.png','img/image107.png'

        ],
        "伞": [
            'img/image165.png','img/image171.png'
        ],
        "植物": [
            'img/image75.png','img/image77.png','img/image79.png','img/image81.png','img/image83.png','img/image85.png','img/image91.png'
        ],
        "二维码": [
            'img/image187.png','img/image189.png'
        ],
    // 可以继续添加其他关键词及其对应图片路径
    };


    displayImage(imageall);
    //点击选择文件夹按钮
    selectFileButton.addEventListener('click', () => {
        fileInput.click(); // 触发文件选择对话框

    });

    fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        images = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type === 'image/png') {
                images.push(URL.createObjectURL(file));
        }
    }
    // 现在 images 数组中包含了所有选中的 .png 文件的 URL
        console.log('选中的图片：', images);
    // 这里可以调用函数来显示这些图片
        displayImage(images);
    });
    //图片初始化
function displayImages(keyword) {
    imageContainer.innerHTML = ''; // 清空展示区域
    let matchedImages = [];
    // 遍历 imageMap 中的所有键
    for (let key in imageMap) {
        if (key.toLowerCase().includes(keyword.toLowerCase())) {
            matchedImages = matchedImages.concat(imageMap[key]);
        }
    }

    if (matchedImages.length === 0) {
        imageContainer.innerHTML = '<p>未找到相关图片</p>'; // 提示没有结果
    } else {
        matchedImages.forEach((imagePath) => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = imagePath.split('/').pop(); // 显示图片文件名
            img.style.width = '80px'; // 设置图片宽度
            img.style.height = '120px'; // 设置图片宽度
            img.style.margin = '10px';   // 设置图片间距
            img.style.cursor = 'pointer'; // 添加鼠标指针样式
            img.addEventListener('click', () => toggleImageSelection(img)); // 添加点击事件
            imageContainer.appendChild(img);
        });
    }
    }

    // 根据关键词筛选并显示图片
    function displayImage(imageList) {
        imageContainer.innerHTML = ''; // 清空展示区域
        imageList.forEach((imagePath) => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = imagePath.split('/').pop(); // 显示图片文件名
            img.style.width = '15px'; // 设置图片宽度
            img.style.height = '32px'; // 设置图片宽度
            img.style.margin = '4px';   // 设置图片间距
            img.style.cursor = 'pointer'; // 添加鼠标指针样式
            img.addEventListener('click', () => toggleImageSelection(img)); // 添加点击事件
            imageContainer.appendChild(img);
        });
    }

    //不显示的画板
    let codecanvas = document.createElement('canvas');
    let codectx = codecanvas.getContext('2d');
    codecanvas.width = 200;  // 指定宽度
    codecanvas.height = 200; // 指定高度

    //选择图片
    let selectedImages = [];
    function toggleImageSelection(img) {
        console.log('图片被点击:', img.src); // 调试日志
        // 清空所有图片的选中状态
        document.querySelectorAll('.selected').forEach(selectedImg => {
            selectedImg.classList.remove('selected');
            selectedImg.style.border = 'none';
    });
    // 清空 selectedImages 数组
        selectedImages = [];
    // 选中当前点击的图片
        img.classList.add('selected');
        img.style.border = '3px solid blue';
        selectedImages.push(img.src);
        console.log('当前选中的图片:', selectedImages);
    
        if (selectedImages.length > 0) {
            drawImageToCanvas(selectedImages[0]);
        }    
    }


    function drawImageToCanvas(imageSrc) {
        let img = new Image();
        img.onload = function() {
            codectx.clearRect(0, 0, codecanvas.width, codecanvas.height); // 清除画布
            
            // 计算缩放比例以适应画布
            let scale = Math.min(codecanvas.width / img.width, codecanvas.height / img.height);
            let x = (codecanvas.width / 2) - (img.width / 2) * scale;
            let y = (codecanvas.height / 2) - (img.height / 2) * scale;
            
            codectx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
        img.src = imageSrc;
    }
    
    

    // 处理搜索
    searchButton.addEventListener('click', () => {
        const isExactMatch = document.getElementById('exactMatchCheckbox').checked;  
        const keyword = searchInput.value.trim().toLowerCase();
    if (!isExactMatch) {
        //const keyword = searchInput.value.trim();
        displayImages(keyword); // 显示筛选后的图片
    } else {
        //const key = searchInput.value.toLowerCase();
        const filteredImages = images.filter(image => {
            return image.toLowerCase().includes(key); // 根据文件路径筛选
        });
        displayImage(filteredImages);

        }
    });

//第二个功能的
const groupButton = document.getElementById('emojiButton');
const groupContainer = document.getElementById('groupContainer');

    // 创建三个部分的容器
    const part1 = document.createElement('div');
    const part2 = document.createElement('div');
    const part3 = document.createElement('div');
   

    const faceMap = 
        [
         'emjoy/face/face1.png',
         'emjoy/face/face2.png',
         'emjoy/face/face3.png',
         'emjoy/face/face4.png',
         'emjoy/face/face5.png',
         'emjoy/face/face6.png'
        ];
    const emoteMap = 
        [
            'emjoy/emote/emote1.png',
            'emjoy/emote/emote2.png',
            'emjoy/emote/emote3.png',
            'emjoy/emote/emote4.png',
            'emjoy/emote/emote5.png',
            'emjoy/emote/emote6.png'
         
        ];

    // 创建保存按钮
    const saveButton = document.createElement('button');
    saveButton.textContent = '保存';

    // 为emojiButton添加点击事件
    groupButton.addEventListener('click', async () => {
        // 清空容器
        groupContainer.innerHTML = '';
        part1.innerHTML = '';
        part2.innerHTML = '';
        part3.innerHTML = '';

        //设置容器大小
        part1.style.border = '1px solid black';
        part1.style.width = '500px';
        part1.style.height = '60px';
        part1.style.margin = '0 auto';
        part1.style.marginBottom = '10px'; // 添加底部间距

        part2.style.border = '1px solid black';
        part2.style.width = '500px';
        part2.style.height = '60px';
        part2.style.margin = '0 auto';
        part2.style.marginBottom = '10px'; // 添加底部间距

        // 加载faceMap中的图片
        displayImagess(faceMap, part1);
        // 加载emote文件夹中的图片
        displayImagess(emoteMap, part2);

        // 设置画板样式
        part3.style.border = '1px solid black';
        part3.style.width = '200px';
        part3.style.height = '200px';
        part3.style.margin = '0 auto';

        // 将三个部分添加到groupContainer
        groupContainer.appendChild(part1);
        groupContainer.appendChild(part2);
        groupContainer.appendChild(part3);
        //groupContainer.appendChild(saveButton);
    });



    // 显示图片
    function displayImagess(images, container) {
        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.style.width = '50px'; // 设置图片宽度
            img.style.margin = '5px';   // 设置图片间距
            img.style.cursor = 'pointer'; // 添加鼠标指针样式
            img.addEventListener('click', () => addToCanvas(imageUrl, container));
            container.appendChild(img);
        });
    }

    const groupcanvas = document.createElement('canvas');
    const ctx = groupcanvas.getContext('2d');
    groupcanvas.width = 200;  // 与 part3 的宽度相同
    groupcanvas.height = 200; // 与 part3 的高度相同

    function updateCanvas() {
         // 清空 Canvas
        ctx.clearRect(0, 0, groupcanvas.width, groupcanvas.height);  
        // 绘制 part3 中的所有图片到 Canvas
        Array.from(part3.childNodes).forEach(img => {
        // 获取图片在 part3 中的位置
        const rect = img.getBoundingClientRect();
        const part3Rect = part3.getBoundingClientRect();
        
        // 计算图片在 Canvas 中的位置
        const x = (rect.left - part3Rect.left) * (groupcanvas.width / part3.offsetWidth);
        const y = (rect.top - part3Rect.top) * (groupcanvas.height / part3.offsetHeight);
        
        // 计算图片在 Canvas 中的大小
        const width = img.width * (groupcanvas.width / part3.offsetWidth);
        const height = img.height * (groupcanvas.height / part3.offsetHeight);
        
        // 绘制图片到 Canvas
        ctx.drawImage(img, x, y, width, height);
    }); 
        // // 绘制 part3 中的所有图片到 Canvas
        // Array.from(part3.childNodes).forEach(img => {
        //     ctx.drawImage(img, 
        //         (groupcanvas.width - img.width) / 2, 
        //         (groupcanvas.height - img.height) / 2, 
        //         img.width, 
        //         img.height
        //     );
        // });
    }

    // 将选中的图片添加到画板
    function addToCanvas(imageUrl, sourceContainer) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.position = 'absolute';
    
        // 计算居中位置
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.style.width = '100px';  // 设置固定宽度
        img.style.height = '100px'; // 设置固定高度

          // 为图片添加一个标识，用于区分来源
        img.dataset.source = sourceContainer === part1 ? 'part1' : 'part2';

        // 移除同类型的图片
        Array.from(part3.children).forEach(child => {
            if (child.dataset.source === img.dataset.source) {
                part3.removeChild(child);
            }
        });

        // 添加新图片
        if (part3.children.length === 0) {
            part3.style.position = 'relative';
        }
        part3.appendChild(img);

        // 在添加图片后，更新 Canvas
        updateCanvas();

    }


//第三个功能的
// 获取必要的DOM元素
const drawButton = document.getElementById('drawButton');
const drawContainer = document.getElementById('drawContainer');

// 创建画布元素
const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 200;
canvas.style.border = '1px solid black';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let savedImages = []; // 用于存储保存的图片

// 绘画函数
function draw(e) {
  if (!isDrawing) return;
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// 清屏函数
function clearCanvas() {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


// 保存函数
function saveCanvas() {
    const imageData = canvas.toDataURL('image/png');
    savedImages.push(imageData);
    console.log('图片已保存，当前保存的图片数量：', savedImages.length);

     // 创建一个临时的 <a> 元素来下载图片
     const link = document.createElement('a');
     link.href = imageData;
     link.download = '绘图_' + new Date().getTime() + '.png';
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);

    // 显示保存成功的弹窗
    showSaveSuccessMessage();
  }

// 显示保存成功消息的函数
function showSaveSuccessMessage() {
    const messageBox = document.createElement('div');
    messageBox.textContent = '保存成功';
    messageBox.style.position = 'fixed';
    messageBox.style.top = '50%';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translate(-50%, -50%)';
    messageBox.style.padding = '10px 20px';
    messageBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    messageBox.style.color = 'white';
    messageBox.style.borderRadius = '5px';
    messageBox.style.zIndex = '1000';
  
    document.body.appendChild(messageBox);
  
    // 2秒后自动移除消息
    setTimeout(() => {
      document.body.removeChild(messageBox);
    }, 2000);
  }

// 点击按钮时显示画布、创建新按钮并添加事件监听器
drawButton.addEventListener('click', () => {
  // 清空容器
  drawContainer.innerHTML = '';
  
  // 创建按钮容器
  const buttonContainer = document.createElement('div');
  buttonContainer.style.marginBottom = '10px';
  //buttonContainer.style.height = '50px'; // 设置容器高度
  
  // 创建清屏按钮
  const clearButton = document.createElement('button');
  clearButton.textContent = '清屏';
  clearButton.style.fontSize = '12px'; // 设置字体大小
  clearButton.addEventListener('click', clearCanvas);
  buttonContainer.appendChild(clearButton);
  
  // 创建保存按钮
  const saveButton = document.createElement('button');
  saveButton.textContent = '保存';
  saveButton.style.fontSize = '12px'; // 设置字体大小
  saveButton.addEventListener('click', saveCanvas);
  buttonContainer.appendChild(saveButton);
  
  // 将按钮容器添加到绘画容器中
  drawContainer.appendChild(buttonContainer);
  
  // 将画布添加到容器中
  drawContainer.appendChild(canvas);
  
  // 添加鼠标事件监听器
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
});



//onlyoffice的代码
//第一个功能的插入
function insertImage_one() {
    // var data = signaturePad.toDataURL('image/png');
    Asc.scope.imageUrl = codecanvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        var oImage = Api.CreateImage(Asc.scope.imageUrl, 10 * 36000, 10 * 36000);
        oImage.SetWrappingStyle("inFront");
        oParagraph.AddDrawing(oImage);
        oDocument.InsertContent([oParagraph]);
    }, false);
};

function insertPPT_one() {
    // var data = signaturePad.toDataURL('image/png');
    Asc.scope.imageUrl = codecanvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oPresentation = Api.GetPresentation();
        var oSlide = oPresentation.GetSlideByIndex(0);
        //oSlide.RemoveAllObjects();
        var oShape = Api.CreateImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000);
        oSlide.AddObject(oShape);
    }, true);
  }

  function insertexcel_one() {
    Asc.scope.imageUrl = codecanvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oWorksheet = Api.GetActiveSheet();
        var oImage = oWorksheet.AddImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000, 0, 2 * 36000, 2, 3 * 36000);
        var sClassType = oImage.GetClassType();
        oWorksheet.SetColumnWidth(0, 15);
      oWorksheet.SetColumnWidth(1, 10);
      // oWorksheet.GetRange("A1").SetValue("Class Type = ");
      // oWorksheet.GetRange("B1").SetValue(sClassType);
    }, true);
  }

  function insertpdf_two() {
    Asc.scope.imageUrl = codecanvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oDocument = Api.GetDocument();
        // 创建一个图片表单域,设置其属性
        var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
        var oParagraph = oDocument.GetElement(0);
        oParagraph.AddElement(oPictureForm);
        oPictureForm.SetImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000);
    }, true);
  }





//第二个功能的插入
function insertImage_two() {
    // var data = signaturePad.toDataURL('image/png');
    Asc.scope.imageUrl = groupcanvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        var oImage = Api.CreateImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000);
        oImage.SetWrappingStyle("inFront");
        oParagraph.AddDrawing(oImage);
        oDocument.InsertContent([oParagraph]);
    }, true);
  }
  
  function insertexcel_two() {
      Asc.scope.imageUrl = groupcanvas.toDataURL('image/png');
      window.Asc.plugin.callCommand(function () {
          var oWorksheet = Api.GetActiveSheet();
          var oImage = oWorksheet.AddImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000, 0, 2 * 36000, 2, 3 * 36000);
          var sClassType = oImage.GetClassType();
          oWorksheet.SetColumnWidth(0, 15);
        oWorksheet.SetColumnWidth(1, 10);
        // oWorksheet.GetRange("A1").SetValue("Class Type = ");
        // oWorksheet.GetRange("B1").SetValue(sClassType);
      }, true);
    }

  function insertPPT_two() {
      // var data = signaturePad.toDataURL('image/png');
      Asc.scope.imageUrl = groupcanvas.toDataURL('image/png');
      window.Asc.plugin.callCommand(function () {
          var oPresentation = Api.GetPresentation();
          var oSlide = oPresentation.GetSlideByIndex(0);
          //oSlide.RemoveAllObjects();
          var oShape = Api.CreateImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000);
          oSlide.AddObject(oShape);
      }, true);
    }

    function insertpdf_two() {
        Asc.scope.imageUrl = groupcanvas.toDataURL('image/png');
        window.Asc.plugin.callCommand(function () {
            var oDocument = Api.GetDocument();
            // 创建一个图片表单域,设置其属性
            var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
            var oParagraph = oDocument.GetElement(0);
            oParagraph.AddElement(oPictureForm);
            oPictureForm.SetImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000);
        }, true);
      }





//第三个功能的插入
function insertImage_three() {
    // var data = signaturePad.toDataURL('image/png');
    Asc.scope.imageUrl = canvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        var oImage = Api.CreateImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000);
        oImage.SetWrappingStyle("inFront");
        oParagraph.AddDrawing(oImage);
        oDocument.InsertContent([oParagraph]);
    }, true);
  };
  
  function insertPPT_three() {
    // var data = signaturePad.toDataURL('image/png');
    Asc.scope.imageUrl = canvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oPresentation = Api.GetPresentation();
        var oSlide = oPresentation.GetSlideByIndex(0);
        //oSlide.RemoveAllObjects();
        var oShape = Api.CreateImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000);
        oSlide.AddObject(oShape);
    }, true);
  }

  function insertexcel_three() {
    Asc.scope.imageUrl = canvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oWorksheet = Api.GetActiveSheet();
        var oImage = oWorksheet.AddImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000, 0, 2 * 36000, 2, 3 * 36000);
        var sClassType = oImage.GetClassType();
        oWorksheet.SetColumnWidth(0, 15);
      oWorksheet.SetColumnWidth(1, 10);
      // oWorksheet.GetRange("A1").SetValue("Class Type = ");
      // oWorksheet.GetRange("B1").SetValue(sClassType);
    }, true);
  }

  function insertpdf_three() {
    Asc.scope.imageUrl = canvas.toDataURL('image/png');
    window.Asc.plugin.callCommand(function () {
        var oDocument = Api.GetDocument();
        // 创建一个图片表单域,设置其属性
        var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
        var oParagraph = oDocument.GetElement(0);
        oParagraph.AddElement(oPictureForm);
        oPictureForm.SetImage(Asc.scope.imageUrl, 40 * 36000, 40 * 36000);
    }, true);
  }



  //onlyoffice各个按钮的功能
  window.Asc.plugin.button = function (id) {
    if (id == 0){
        switch (window.Asc.plugin.info.editorType){
            case 'word': {
                insertImage_one();
                this.executeCommand("close", "");
                break;
            }
            case 'cell':{
                insertexcel_one();
                this.executeCommand("close", "");
                break;
            }
            case 'slide':{
                insertPPT_one();
                this.executeCommand("close", "");
                break;
            }
            case 'pdf':{
                insertpdf_one();
                this.executeCommand("close", "");
                break;
            }
       }
    }
    else if (id == 1){
        var data = groupcanvas.toDataURL('image/png');
            switch (window.Asc.plugin.info.editorType){
                case 'word': {
                    insertImage_two();
                    this.executeCommand("close", "");
                    break;
                }
                case 'cell':{
                    insertexcel_two();
                    this.executeCommand("close", "");
                    break;
                }
                case 'slide':{
                    insertPPT_two();
                    this.executeCommand("close", "");
                    break;
                }
                case 'pdf':{
                    insertpdf_two();
                    this.executeCommand("close", "");
                    break;
                }
           }
        }

    else if (id == 2){
          switch (window.Asc.plugin.info.editorType){
              case 'word': {
                  insertImage_three();
                  this.executeCommand("close", "");
                  break;
              }
              case 'cell':{
                    insertexcel_three();
                    this.executeCommand("close", "");
                    break;

                  break;
              }
              case 'slide':{
                  insertPPT_three();
                  this.executeCommand("close", "");
                  break;
              }
              case 'pdf':{
                insertpdf_three();
                this.executeCommand("close", "");
                break;
            }
         }
      }
      else if (id == 3){
        // 在这里添加跳转到指定链接的代码
        window.open('https://www.yuque.com/qingshanyu/gc1psa/tf8f71dp168u37yk?singleDoc# 《关于OnlyDraw插件》', '_blank');
      }
      else if (id == -1){
        this.executeCommand("close", "");
      }
      

  };

//按钮事件



})(window, undefined);