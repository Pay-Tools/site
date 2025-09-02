import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  CreditCard, 
  Smartphone, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Lock,
  Eye,
  Server,
  Clock
} from "lucide-react";

const PaymentFlowAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentAcquirer, setCurrentAcquirer] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const paymentMethods = [
    { name: "Cartão de Crédito", icon: CreditCard, color: "from-blue-500 to-indigo-500" },
    { name: "PIX", icon: Smartphone, color: "from-blue-500 to-sky-500" }
  ];

  const acquirers = [
    { name: "CIELO", logo: "🏦" },
    { name: "REDE", logo: "💳" },
    { name: "ADIQ", logo: "🔷" },
    { name: "MERCADO PAGO", logo: "💰" },
    { name: "CELLCOIN", logo: "📱" },
    { name: "PINBANK", logo: "🏧" },
    { name: "FISERV", logo: "⚡" }
  ];

  const antifraudProviders = [
    { name: "ClearSale", logo: "🛡️" },
    { name: "Cybersource", logo: "🔒" }
  ];

  const steps = [
    { 
      title: "Entrada do Pagamento", 
      description: "Cliente escolhe método de pagamento",
      duration: 6000 
    },
    { 
      title: "Seleção da Adquirente", 
      description: "Sistema escolhe a melhor rota",
      duration: 8000 
    },
    { 
      title: "Verificação Antifraude", 
      description: "Análise de segurança em tempo real",
      duration: 6000 
    },
    { 
      title: "Pagamento Aprovado", 
      description: "Transação concluída com sucesso",
      duration: 5000 
    }
  ];

  // Animation cycle with smooth transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      // Start transition
      setIsTransitioning(true);
      
      // After transition animation, change step
      setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setCurrentStep(0);
        }
        setIsTransitioning(false);
      }, 600); // Transition duration
      
    }, steps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep]);

  // Acquirer switching animation
  useEffect(() => {
    if (currentStep === 1) {
      const acquirerTimer = setInterval(() => {
        setCurrentAcquirer((prev) => (prev + 1) % acquirers.length);
      }, 500);

      return () => clearInterval(acquirerTimer);
    }
  }, [currentStep]);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index < steps.length - 1 ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                  index <= currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-sky-500 text-white'
                    : 'bg-slate-700 text-slate-400'
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 mx-4 bg-slate-700 rounded">
                  <div
                    className={`h-full bg-gradient-to-r from-blue-500 to-sky-500 rounded transition-all duration-500 ${
                      index < currentStep ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>
          <p className="text-slate-400">{steps[currentStep].description}</p>
        </div>
      </div>

      {/* Animation Area */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-2xl p-8 min-h-[300px] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-blue-400 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-sky-400 animate-spin" style={{animationDuration: '20s'}}></div>
        </div>

        <div className="relative z-10">
          {/* Transition Overlay */}
          {isTransitioning && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800/90 backdrop-blur-sm rounded-xl z-50 transition-all duration-600">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <div className="w-16 h-16 border-4 border-blue-500/30 rounded-full animate-spin">
                    <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
                <div className="flex space-x-1 justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}

          {/* Step Content with smooth transitions */}
          <div className={`transition-all duration-500 transform ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            {/* Step 0: Payment Input */}
            {currentStep === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  {paymentMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <Card 
                        key={index} 
                        className={`bg-slate-700 border-slate-600 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 animate-slide-in-left ${
                          index === 0 ? 'animate-pulse' : ''
                        }`}
                        style={{animationDelay: `${index * 0.2}s`}}
                      >
                        <CardContent className="p-6 flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center transform transition-transform hover:rotate-12`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{method.name}</h4>
                            <p className="text-slate-400 text-sm">Método disponível</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="text-center animate-slide-in-right">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center mb-4 animate-bounce shadow-lg shadow-blue-500/50">
                    <ArrowRight className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-slate-300">Processando entrada...</p>
                </div>
              </div>
            )}

            {/* Step 1: Acquirer Selection */}
            {currentStep === 1 && (
              <div className="text-center animate-fade-in">
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 animate-spin shadow-lg shadow-orange-500/50">
                    <Server className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-slate-300 mb-4">Selecionando melhor adquirente...</p>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
                  {acquirers.map((acquirer, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border transition-all duration-500 transform animate-scale-in ${
                        index === currentAcquirer 
                          ? 'border-blue-500 bg-blue-500/20 scale-110 shadow-lg shadow-blue-500/30' 
                          : 'border-slate-600 bg-slate-700 hover:scale-105'
                      }`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="text-2xl mb-2 transform transition-transform hover:scale-125">{acquirer.logo}</div>
                      <p className="text-xs text-slate-300 font-semibold">{acquirer.name}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 animate-slide-up">
                  <Badge className="bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-2 shadow-lg">
                    <Zap className="w-4 h-4 mr-2" />
                    {acquirers[currentAcquirer].name} Selecionada
                  </Badge>
                </div>
              </div>
            )}

            {/* Step 2: Antifraud Check */}
            {currentStep === 2 && (
              <div className="text-center animate-fade-in">
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-4 animate-pulse shadow-lg shadow-red-500/50">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-slate-300 mb-4">Verificação de segurança em andamento...</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {antifraudProviders.map((provider, index) => (
                    <Card 
                      key={index} 
                      className="bg-slate-700 border-slate-600 animate-pulse animate-slide-in-bottom shadow-lg"
                      style={{animationDelay: `${index * 0.3}s`}}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl mb-3 transform transition-transform hover:scale-125">{provider.logo}</div>
                        <h4 className="text-white font-semibold mb-2">{provider.name}</h4>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                          <span className="text-slate-400 text-sm">Analisando...</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-center space-x-2 animate-slide-up">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold">Análise de Risco: Baixo</span>
                </div>
              </div>
            )}

            {/* Step 3: Payment Approved */}
            {currentStep === 3 && (
              <div className="text-center animate-fade-in">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center mb-4 animate-bounce shadow-lg shadow-blue-500/50">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 animate-slide-up">Pagamento Aprovado!</h3>
                  <p className="text-slate-300 animate-slide-up" style={{animationDelay: '0.2s'}}>Transação processada com sucesso</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    { icon: Clock, label: "Tempo de Processamento", value: "0.8s" },
                    { icon: Shield, label: "Status de Segurança", value: "Aprovado" },
                    { icon: CheckCircle, label: "Status", value: "Sucesso" }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-slate-700 rounded-lg p-4 border border-blue-500/30 animate-scale-in shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        style={{animationDelay: `${index * 0.2}s`}}
                      >
                        <IconComponent className="w-6 h-6 text-blue-400 mx-auto mb-2 transform transition-transform hover:scale-125" />
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="text-blue-400 font-bold">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Data Flow Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30">
          <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping" 
               style={{ left: `${(currentStep / (steps.length - 1)) * 100}%` }}></div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 text-center">
        <p className="text-sm text-slate-400">
          ✨ Animação em tempo real do fluxo de pagamento PayTools
        </p>
      </div>
    </div>
  );
};

export default PaymentFlowAnimation;