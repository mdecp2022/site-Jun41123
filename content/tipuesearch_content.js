var tipuesearch = {"pages": [{'title': 'About', 'text': '這個靜態做的不是很好,老師慢慢觀賞我的吧! \n \xa0我是 41123141 廖俊生 \n github倉儲 :  mdecp2022/site-Jun41123 \n w5 password generator 密碼產生器 \n \n # 導入亂數模組\nimport random\n# 導入字串模組\nimport string\n# 利用 def 關鍵字定義函式\n# 函式的輸入變數可以設定初始值\ndef password_generator(size=4, chars=string.ascii_lowercase + string.digits):\n    # 函式內以多行註解說明函式功能\n    """Generate random password\n    """\n    # 利用 return 關鍵字將所產生的亂數字串傳回\n    return \'\'.join(random.choice(chars) for _ in range(size))\n# 建立一個變數與隨後的字串對應\npass_string = "abcdefghkmnpqrstuwxyz123456789"\n# 利用重複迴圈呼叫 password_generator() 函式 10 次\nfor i in range(10):\n    print(password_generator(4, pass_string)) \n \n 第一次 密碼產生器,我覺得好有趣喔! \n \n \n \n \n \n \n \n \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'cp2022', 'text': '\xa0 w6_text1 \xa0抽點與擷取個人靜態網頁的程式結合 \n \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n', 'tags': '', 'url': 'cp2022.html'}, {'title': '心得', 'text': '', 'tags': '', 'url': '心得.html'}, {'title': '考試', 'text': '', 'tags': '', 'url': '考試.html'}, {'title': 'W10小考', 'text': 'HW小考 \n import ast\n\n# get stud_list first\n\ndef get_stud(c_name):\n    courses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"}\n    c = courses[c_name]\n    url = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True"\n    data = open(url).read().split("\\n")\n    stud = data[:-1]\n    return stud\n    \ncp_stud = get_stud("1a")\n\n# get w10 quiz result\ncp_w10_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/9e8bf693a2805631aa12992db4d4f23e0f64e868/2022_1112_cp1a_w10_quiz.json"\n\ndef get_score(url):\n    json_data = open(url).read()\n    big_dict = ast.literal_eval(json_data)\n    data = big_dict["body"]["testuser"]\n    quiz_dict = {}\n    for i in data:\n        stud_id = data[i]["user_name"]\n        stud_score = int(float(data[i]["total_score"]))\n        quiz_dict[stud_id] = stud_score\n    return quiz_dict\n    \ncp_quiz = get_score(cp_w10_quiz_url)\ncp_abs = []\nfor stud in cp_stud:\n    try:\n        print(stud, cp_quiz[stud])\n    except:\n        # 缺考者沒有 quiz 成績\n        print(stud, "缺")\n        cp_abs.append(stud)\n# 列出缺考名單\nprint("="*20)\nprint("以下為 w10 缺考名單:")\nfor stud in cp_abs:\n    print(stud) \n 心得: 雖然小考不是很好,但作業都有按時做喔! \n', 'tags': '', 'url': 'W10小考.html'}, {'title': 'w14小考', 'text': 'HW小考 \n import ast\n\n# get stud_list first\n\ndef get_stud(c_name):\n    courses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"}\n    c = courses[c_name]\n    url = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True"\n    data = open(url).read().split("\\n")\n    stud = data[:-1]\n    return stud\n    \ncp_stud = get_stud("1a")\n\n# get w10 quiz result\ncp_w10_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/a48d36ae883bde8efd07b25bfddaed8f13200353/2022_1209_cp_w14_1a_quiz.json"\n\ndef get_score(url):\n    json_data = open(url).read()\n    big_dict = ast.literal_eval(json_data)\n    data = big_dict["body"]["testuser"]\n    quiz_dict = {}\n    for i in data:\n        stud_id = data[i]["user_name"]\n        stud_score = int(float(data[i]["total_score"]))\n        quiz_dict[stud_id] = stud_score\n    return quiz_dict\n    \ncp_quiz = get_score(cp_w10_quiz_url)\ncp_abs = []\nfor stud in cp_stud:\n    try:\n        print(stud, cp_quiz[stud])\n    except:\n        # 缺考者沒有 quiz 成績\n        print(stud, "缺")\n        cp_abs.append(stud)\n# 列出缺考名單\nprint("="*20)\nprint("以下為 w10 缺考名單:")\nfor stud in cp_abs:\n    print(stud) \n 心得:雖然考不好,但作業都有按時做 \n', 'tags': '', 'url': 'w14小考.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w11_HW', 'text': '', 'tags': '', 'url': 'w11_HW.html'}, {'title': '小格子', 'text': 'w11HW \n # 這個程式用於 demo 以 canvas 畫線以及寫字\n# 從 Brython 程式庫中的 browser 模組導入 document 類別, 並以簡寫設定為 doc\nfrom browser import document as doc\n# 從 browser 模組導入 html 類別, 主要用於建立 CANVAS 標註物件, 並插入頁面中\nfrom browser import html\n# 利用 html 建立一個 CANVAS 標註物件, 與變數 canvas 對應\ncanvas = html.CANVAS(width = 600, height = 600)\n# 將 canvas 標註的 id 設為 "canvas"\ncanvas.id = "canvas"\n# 將 document 中 id 為 "brython_div1" 的標註 \n# 設為與 brython_div 變數對應\nbrython_div = doc["brython_div1"]\n# 將 canvas 標註放入 brython_div 所在位置\n# 頁面中原本就已經放入 <div id="brython_div"></div> 標註\nbrython_div <= canvas\n# 將頁面中 id 為 canvas 的 CANVAS 設為與 canvas 變數對應\ncanvas = doc["canvas"]\n# 將 canvas 的 2d 繪圖 context 命名為 ctx\nctx = canvas.getContext("2d")\n# 建立一個 dRect() 函式\n# s default 為 1, c defaul 為紅色\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath();\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke();\n    \n# 建立畫直線函式\ndef draw_line(x1, y1, x2, y2, color="#ff0000"):\n    ctx.beginPath()\n    ctx.moveTo(x1, y1)\n    ctx.lineTo(x2, y2)\n    ctx.strokeStyle = color\n    ctx.stroke()\n# 建立 write Text 函式\ndef wText(x, y, t, s=14, c=\'#0000ff\'):\n    ctx.font = str(s) + "px Arial";\n    ctx.fillText(t, x, y)\n# 定義畫格線的函式\ndef grid(startx, starty, w, h, wnum, hnum, pixel=1, color="#ff0000"):\n    # 利用迴圈與座標增量繪圖\n    # 因為輸入 wnum 與 hnum 為格子數, 畫格線數則需加上 1\n    for i in range(wnum+1):\n        for j in range(hnum+1):\n            # 畫上下直線\n            yend = starty + h*(hnum)\n            xend = startx + w*(wnum)\n            x = startx + i*w\n            draw_line(x, starty, x, yend, color)\n            # 畫左右直線\n            y = starty + j*h\n            draw_line(startx, y, xend, y, color)\n            #wText(w/2-10, y-w/2, str(j))\n            \n# 設定格數\nnum = 15\n# 設定線寬\npixel = 1\n# 設定 w 寬度\nw = int(canvas.width/num) - pixel\n# 設定 h 高度\nh = int(canvas.height/num) - pixel\n# 設定繪圖座標點起點位置\nx = 1\ny = 1\n# 利用 grid 函式畫出格線\ngrid(x, y, w, h, num, num, pixel=1, color="black") \n', 'tags': '', 'url': '小格子.html'}, {'title': 'w10_HW2', 'text': '', 'tags': '', 'url': 'w10_HW2.html'}, {'title': '變數基本法', 'text': 'HW2 \n a = [i for i in range(1, 10, 2)]\nprint(a) \n \n', 'tags': '', 'url': '變數基本法.html'}, {'title': 'w16_HW', 'text': '', 'tags': '', 'url': 'w16_HW.html'}, {'title': '綠色小格', 'text': 'HW綠色小格 \n from browser import document as doc\nfrom browser import html\nimport browser.timer\nfrom random import random, randint\n\ncanvas = html.CANVAS(width = 600, height = 600)\ncanvas.id = "canvas"\nbrython_div = doc["brython_div1"]\n\nbrython_div <= html.BUTTON("啟動", id="power")\nbrython_div <= html.BR()\n\nbrython_div <= canvas\ncanvas = doc["canvas"]\nctx = canvas.getContext("2d")\n\n\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath();\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke();\n    \ndef draw_line(x1, y1, x2, y2, color="#ff0000"):\n    ctx.beginPath()\n    ctx.moveTo(x1, y1)\n    ctx.lineTo(x2, y2)\n    ctx.strokeStyle = color\n    ctx.stroke()\n\ndef wText(x, y, t, s=14, c=\'#0000ff\'):\n    ctx.font = str(s) + "px Arial";\n    ctx.fillText(t, x, y)\n\ndef grid(startx, starty, w, h, wnum, hnum, pixel=1, color="#ff0000"):\n    for i in range(wnum+1):\n        for j in range(hnum+1):\n            yend = starty + h*(hnum)\n            xend = startx + w*(wnum)\n            x = startx + i*w\n            draw_line(x, starty, x, yend, color)\n            y = starty + j*h\n            draw_line(startx, y, xend, y, color)\n\ndef center(lx, ly, rx, ry):\n    x = (lx + rx)/2\n    y = (ly + ry)/2\n    return x, y\n    \ndef draw_rect(gx, gy, gw, gh, color="lime"):\n    lx = origx + (gx-1)*w\n    ly = origy + (gy-1)*h\n    rx = origx + gx*w\n    ry = origy + gy*h\n    cx, cy = center(lx, ly, rx, ry)\n    glx = cx - gw/2\n    gly = cy - gh/2\n    ctx.fillStyle = color\n    ctx.fillRect(glx, gly, gw, gh)\ndef wipe():\n    draw_rect(nowx, nowy, 30+1, 30+1, color="white")\n\ndef draw():\n    draw_rect(nowx, nowy, 30, 30, color="lime")\n\ndef walk():\n    global stepx, stepy\n    \n    if nowx == 1 and nowy == 1:\n        stepx = 1\n        stepy = 0\n    \n    elif nowy == 1 and nowx == 8:\n        stepx = 0\n        stepy = 1\n    \n    elif nowy == 15 and nowx == 8:\n        stepx = 1\n        stepy = 0\n    \n    elif nowx == 15 and nowy == 15:\n        stepx = 0\n        stepy = -1\n    \n    elif nowy == 8 and nowx == 15:\n        stepx = -1\n        stepy = 0\n    \n    elif nowy == 8 and nowx == 1:\n        stepx = 0\n        stepy = -1 \n        \ndef game():\n    global nowx, nowy\n    walk()\n    wipe()\n    nowx += stepx\n    nowy += stepy\n    draw()\n\nanim = None\n \ndef launchAnimation(ev):\n    global anim\n    if anim is None:\n        anim = browser.timer.set_interval(game, 100)\n        doc[\'power\'].text = \'暫停\'\n    elif anim == \'hold\':\n        anim = browser.timer.set_interval(game, 100)\n        doc[\'power\'].text = \'暫停\'\n    else:\n        browser.timer.clear_interval(anim)\n        anim = \'hold\'\n        doc[\'power\'].text = \'繼續\'\n        \nnowx = 1\nnowy = 1\nstepx = 0\nstepy = 0\nwnum = 15\nhnum = 15\npixel = 1\nw = int(canvas.width/wnum) - pixel\nh = int(canvas.height/hnum) - pixel\norigx = 1\norigy = 1\ngrid(origx, origy, w, h, wnum, hnum, pixel=1, color="black")\n\ndoc["power"].bind("click", launchAnimation) \n \n', 'tags': '', 'url': '綠色小格.html'}, {'title': 'w15_HW', 'text': '', 'tags': '', 'url': 'w15_HW.html'}, {'title': '問題', 'text': '1. 為何學習計算機程式需要建立個人倉儲? \n A: 這樣才可以建立一個網站 .   2. 全球資訊網能夠提供甚麼功能或有什麼優點? \n A: 是透過網際網路存取的，由許多互相連結的超文字組成的資訊系統 .網頁主要是文字檔案格式化和超文件標示語言（HTML) .除了格式化文字之外，網頁還可能包含圖片、影片、聲音和軟體元件，這些元件會在使用者的網頁瀏覽器中呈現為多媒體內容的連貫頁面 . \n 3. Replit, stud.cycu.org 與 localhost 分別代表甚麼? \n A: 1.Replit : 是提供線上集成開發環境服務的公司，由Amjad Masad與Hata Odeh於2016年共同創立 . \n \xa0 \xa0 2.stud.cycu.org :學校用的 . \n \xa0 \xa0 3.localhost:是在電腦網路中 "用於" 表示此電腦的主機名稱 . \n 4. https, ssh 到底提供使用者那些功能或優點? \n A: 1. HTTPS(全稱:Hypertext Transfer Protocol Secure-超文本傳輸安全協定)，是以安全為目,在\xa0 HTTP 的基礎上通過傳輸加密和身分認證 保證了傳輸過程的安全性 \xa0 . \xa0\xa0 \n \xa0 \xa0 2. 安全外殼協定 (Secure Shell Protocol，簡稱 SSH )是一種加密的網路傳輸協定，可在不安全的網中為網路服務提供安全的傳輸環境 .SSH通過在網路中建立安全隧道來實現SSH客戶端與伺服器之間的連接 . \n 5. Brython 與 Python 有甚麼差別? \n A:新手適合 Brython . \n 6. 能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? \n A:神奇 . \n 7. 變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼?? \n A:利用 for 迴圈執行變數增量或重複執行特定程序 .', 'tags': '', 'url': '問題.html'}, {'title': 'w14_HW', 'text': '', 'tags': '', 'url': 'w14_HW.html'}, {'title': 'w14_按鈕', 'text': '\n \n \n 取使用者輸入 \n \n 邊看影片邊做,感覺好困難喔! \n \n \n', 'tags': '', 'url': 'w14_按鈕.html'}, {'title': 'w13_溫度1HW', 'text': 'ex1 \n \'\'\'\nf = c*9/5 + 32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\n#print(type(c))\nc = float(c)\nprint(c, c*9/5 + 32) \n ex2 \n \'\'\'\nf = c*9/5 + 32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\n#print(type(c))\nc = float(c)\nprint("你輸入的攝氏溫度: " + str(c), "等於華氏溫度: " + str(c*9/5 +32)) \n 心得:這周也是溫度轉換的進階版吧,也可以很快知道轉換後的結果.', 'tags': '', 'url': 'w13_溫度1HW.html'}, {'title': 'w12_溫度2HW', 'text': 'ex1 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n ex2 (攝氏轉換為華氏) \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\n\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.") \n \n 心得:溫度是天氣的一部份.這個程式可以很快知道溫度轉變為華氏是多少.', 'tags': '', 'url': 'w12_溫度2HW.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};