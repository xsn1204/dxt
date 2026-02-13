// 搜索定位函数（原有函数补充）
function searchLocation() {
    const keyword = document.getElementById('searchInput').value;
    document.getElementById('results').innerHTML = `<p class="hint">正在为您搜索“${keyword}”...</p>`;
    
    // 触发延迟加载逻辑
    setTimeout(loadStoreInfo, 3000);
}


// 延迟加载店面信息和替换地图图片
function loadStoreInfo() {
    // 1. 替换地图容器为map.png（保留cover样式）
    const mapCanvas = document.getElementById('map-canvas');
    // 清除原有网格背景，只显示map.png
    mapCanvas.style.backgroundImage = 'url("map.png")';
    // 强制确保cover属性（防止样式覆盖）
    mapCanvas.style.backgroundSize = 'cover';
    mapCanvas.style.backgroundRepeat = 'no-repeat';
    mapCanvas.style.backgroundPosition = 'center';

    // 2. 左侧搜索栏添加店面卡片信息
    const resultsArea = document.getElementById('results');
    resultsArea.innerHTML = `
        <div class="store-card">
            <div class="title">芝心芝味（总店）</div>
            <div class="info">
                <p>📍 地址：上海市浦东新区张江高科技园区科苑路88号</p>
                <p>☎️ 电话：021-12345678</p>
                <p>⏰ 营业时间：09:00 - 21:00</p>
                <p>⭐ 评分：4.8/5（120条评价）</p>
                <p>🚗 停车：免费停车1小时</p>
            </div>
        </div>
    `;
}

// 页面加载后自动触发搜索（模拟原有逻辑）
window.onload = function() {
    setTimeout(loadStoreInfo, 3000);
};