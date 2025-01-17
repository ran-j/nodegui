#pragma once

#include <napi.h>

#include <QPointer>

#include "Extras/Export/export.h"
#include "QtCore/QObject/qobject_macro.h"
#include "nqtexttospeech.hpp"

class DLL_EXPORT QTextToSpeechtWrap
    : public Napi::ObjectWrap<QTextToSpeechtWrap> {
  QOBJECT_WRAPPED_METHODS_DECLARATION
 private:
  QPointer<NQtexttospeech> instance;

 public:
  static Napi::Object init(Napi::Env env, Napi::Object exports);
  QTextToSpeechtWrap(const Napi::CallbackInfo &info);
  ~QTextToSpeechtWrap();
  NQtexttospeech *getInternalInstance();
  // class constructor
  static Napi::FunctionReference constructor;
  // wrapped methods
  Napi::Value say(const Napi::CallbackInfo &info);
  Napi::Value setVoice(const Napi::CallbackInfo &info);
  Napi::Value setLocale(const Napi::CallbackInfo &info);
  Napi::Value availableLocales(const Napi::CallbackInfo &info);
  Napi::Value availableVoices(const Napi::CallbackInfo &info);
  Napi::Value availableEngines(const Napi::CallbackInfo &info);
  Napi::Value locale(const Napi::CallbackInfo &info);
  Napi::Value setRate(const Napi::CallbackInfo &info);
  Napi::Value rate(const Napi::CallbackInfo &info);
  Napi::Value setPitch(const Napi::CallbackInfo &info);
  Napi::Value pitch(const Napi::CallbackInfo &info);
  Napi::Value volume(const Napi::CallbackInfo &info);
  Napi::Value setVolume(const Napi::CallbackInfo &info);
  Napi::Value state(const Napi::CallbackInfo &info);
  Napi::Value pause(const Napi::CallbackInfo &info);
  Napi::Value resume(const Napi::CallbackInfo &info);
  Napi::Value stop(const Napi::CallbackInfo &info);
};

namespace StaticNQtexttospeechMethods {
DLL_EXPORT Napi::Value availableEngines(const Napi::CallbackInfo &info);
}  // namespace StaticNQtexttospeechMethods