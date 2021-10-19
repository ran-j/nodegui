#include "QtWidgets/QSound/qsound_wrap.h"

#include "Extras/Utils/nutils.h"
#include "QtCore/QPoint/qpoint_wrap.h"
#include "QtWidgets/QWidget/qwidget_wrap.h"

Napi::FunctionReference QSoundWrap::constructor;

Napi::Object QSoundWrap::init(Napi::Env env, Napi::Object exports) {
  Napi::HandleScope scope(env);
  char CLASSNAME[] = "QSound";
  Napi::Function func = DefineClass(
      env, CLASSNAME,
      {InstanceMethod("fileName", &QSoundWrap::fileName),
       InstanceMethod("isFinished", &QSoundWrap::isFinished),
       InstanceMethod("loops", &QSoundWrap::loops),
       InstanceMethod("loopsRemaining", &QSoundWrap::loopsRemaining),
       InstanceMethod("setLoops", &QSoundWrap::setLoops),
       InstanceMethod("play", &QSoundWrap::play),
       InstanceMethod("stop", &QSoundWrap::stop),
       COMPONENT_WRAPPED_METHODS_EXPORT_DEFINE(QSoundWrap)});
  constructor = Napi::Persistent(func);
  exports.Set(CLASSNAME, func);
  return exports;
}

QSoundWrap::~QSoundWrap() { this->instance.reset(); }
QSound* QSoundWrap::getInternalInstance() { return this->instance.get(); }

QSoundWrap::QSoundWrap(const Napi::CallbackInfo& info)
    : Napi::ObjectWrap<QSoundWrap>(info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);

  if (info.Length() == 1 && info[0].IsString()) {
    QString filename(info[0].As<Napi::String>().Utf8Value().c_str());
    this->instance = std::make_unique<QSound>(filename);
  } else if (info.Length() == 1 && info[0].IsExternal()) {
    this->instance =
        std::unique_ptr<QSound>(info[0].As<Napi::External<QSound>>().Data());
  } else if (info.Length() == 2) {
    QString filename(info[0].As<Napi::String>().Utf8Value().c_str());
    Napi::Object parentObject = info[1].As<Napi::Object>();
    NodeWidgetWrap* parentWidgetWrap =
        Napi::ObjectWrap<NodeWidgetWrap>::Unwrap(parentObject);
    this->instance = std::make_unique<QSound>(
        filename, parentWidgetWrap->getInternalInstance());
  } else {
    Napi::TypeError::New(env, "Wrong number of arguments")
        .ThrowAsJavaScriptException();
  }
}

Napi::Value QSoundWrap::fileName(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);
  QString fileName = this->instance->fileName();
  return Napi::String::New(env, fileName.toUtf8().constData());
}

Napi::Value QSoundWrap::isFinished(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);
  return Napi::Boolean::New(env, instance->isFinished());
}

Napi::Value QSoundWrap::loops(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);
  return Napi::Number::New(env, instance->loops());
}

Napi::Value QSoundWrap::loopsRemaining(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);
  return Napi::Number::New(env, instance->loopsRemaining());
}

void QSoundWrap::setLoops(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);
  int64_t loops = info[0].As<Napi::Number>();
  instance->setLoops(loops);
}

void QSoundWrap::play(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);
  instance->play();
}

void QSoundWrap::stop(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);
  instance->stop();
}

void StaticQSoundWrapMethods::play(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);

  QString fileName = QString(info[0].As<Napi::String>().Utf8Value().c_str());
  QSound::play(fileName);
}