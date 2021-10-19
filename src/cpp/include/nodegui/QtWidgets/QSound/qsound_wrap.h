#pragma once

#include <napi.h>

#include <QSound>

#include "Extras/Export/export.h"
#include "core/Component/component_macro.h"

class DLL_EXPORT QSoundWrap : public Napi::ObjectWrap<QSoundWrap> {
  COMPONENT_WRAPPED_METHODS_DECLARATION

 private:
  std::unique_ptr<QSound> instance;

 public:
  static Napi::FunctionReference constructor;
  static Napi::Object init(Napi::Env env, Napi::Object exports);
  QSoundWrap(const Napi::CallbackInfo& info);
  ~QSoundWrap();
  QSound* getInternalInstance();

  Napi::Value fileName(const Napi::CallbackInfo& info);
  Napi::Value isFinished(const Napi::CallbackInfo& info);
  Napi::Value loops(const Napi::CallbackInfo& info);
  Napi::Value loopsRemaining(const Napi::CallbackInfo& info);
  void setLoops(const Napi::CallbackInfo& info);
  void play(const Napi::CallbackInfo& info);
  void stop(const Napi::CallbackInfo& info);
};

namespace StaticQSoundWrapMethods {
DLL_EXPORT void play(const Napi::CallbackInfo& info);
}  // namespace StaticQSoundWrapMethods
