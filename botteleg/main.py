import telebot
from telebot import types 

bot = telebot.TeleBot('6559348531:AAFXenHtNuR4mAvYiPW8UXlaynmsQ_n5ORo')
thic_nam = '1'
@bot.message_handler(commands=['start'])
def start(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    btn1 = types.KeyboardButton("Купить")
    btn2 = types.KeyboardButton("Корзина")
    markup.add(btn1, btn2)
    bot.send_message(message.chat.id, text="Привет, {0.first_name}! Я бот по продаже, посмотри мой ассортимент".format(message.from_user), reply_markup=markup)
    
@bot.message_handler(content_types=['text'])
def setting_tel(message):
    if(message.text == "Купить"):
        bot.send_message(message.chat.id, text="Привеет.. Спасибо что читаешь статью!)")
    elif(message.text == "Корзина"):
        bot.send_message(message.chat.id, text=f"Корзина:\n{thic_nam}")
bot.polling(none_stop=True)