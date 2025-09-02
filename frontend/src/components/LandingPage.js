import React, { useState, useEffect } from "react";
import Header from "./Header";
import PaymentFlowAnimation from "./PaymentFlowAnimation";
import RecurringPaymentSection from "./RecurringPaymentSection";
import WebhooksSection from "./WebhooksSection";
import AdaptiveLogo from "./AdaptiveLogo";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Code, 
  Shield, 
  Zap, 
  Globe, 
  ChevronRight, 
  Check, 
  Play,
  ArrowRight,
  Terminal,
  Cpu,
  Database,
  Lock,
  TrendingUp,
  Users,
  Clock,
  MapPin,
  CreditCard,
  CheckCircle
} from "lucide-react";
import { mockData } from "../data/mock";

const LandingPage = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Gateway Dashboard Animation Effect
  useEffect(() => {
    // No longer needed for CLI, but keeping for consistency
    // Animation is now handled by CSS animations and component rendering
  }, []);

  const iconMap = {
    "shield-check": Shield,
    "zap": Zap,
    "code": Code,
    "globe": Globe
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"></div>
        
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-400 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-400 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-orange-400 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-60 right-1/3 w-20 h-20 border border-emerald-400 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-slate-800 rounded-full px-4 py-2 mb-6">
                <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 mr-2">New</Badge>
                <span className="text-sm text-slate-300">uGo Facial Recognition Integration</span>
                <ChevronRight className="w-4 h-4 ml-2 text-slate-400" />
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {mockData.hero.title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {mockData.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2" />
                  Try Free Sandbox
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg">
                  <Code className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </div>
            </div>

            {/* Modern Payment Gateway Dashboard */}
            <div className="relative">
              <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-900/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-slate-900" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">PayTools Gateway</div>
                      <div className="text-xs text-slate-400">Real-time Dashboard</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-emerald-400 font-medium">ONLINE</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Transaction Cards Animation */}
                  <div className="space-y-3">
                    {[
                      { id: "TX001", amount: "R$ 250,00", method: "PIX", status: "approved", delay: 0 },
                      { id: "TX002", amount: "R$ 1.299,99", method: "Cartão", status: "processing", delay: 1 },
                      { id: "TX003", amount: "R$ 89,90", method: "PIX", status: "approved", delay: 2 }
                    ].map((tx, index) => (
                      <div 
                        key={tx.id}
                        className={`flex items-center justify-between p-3 bg-slate-700 rounded-lg border transition-all duration-500 transform ${
                          tx.status === 'approved' ? 'border-emerald-500/30 bg-emerald-500/10' : 
                          tx.status === 'processing' ? 'border-orange-500/30 bg-orange-500/10 animate-pulse' : 
                          'border-slate-600'
                        }`}
                        style={{
                          animation: `slideInRight 0.6s ease-out ${tx.delay * 0.3}s both`
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            tx.status === 'approved' ? 'bg-emerald-500' : 
                            tx.status === 'processing' ? 'bg-orange-500' : 'bg-slate-600'
                          }`}>
                            {tx.status === 'approved' ? (
                              <Check className="w-4 h-4 text-white" />
                            ) : tx.status === 'processing' ? (
                              <Clock className="w-4 h-4 text-white animate-spin" />
                            ) : (
                              <CreditCard className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">{tx.id}</div>
                            <div className="text-slate-400 text-xs">{tx.method}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{tx.amount}</div>
                          <div className={`text-xs capitalize ${
                            tx.status === 'approved' ? 'text-emerald-400' : 
                            tx.status === 'processing' ? 'text-orange-400' : 'text-slate-400'
                          }`}>
                            {tx.status === 'approved' ? 'Aprovado' : 
                             tx.status === 'processing' ? 'Processando' : 'Pendente'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Real-time Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700">
                    <div className="text-center">
                      <div className="text-emerald-400 text-lg font-bold animate-pulse">98.9%</div>
                      <div className="text-xs text-slate-400">Taxa de Sucesso</div>
                    </div>
                    <div className="text-center">
                      <div className="text-cyan-400 text-lg font-bold">0.8s</div>
                      <div className="text-xs text-slate-400">Tempo Médio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 text-lg font-bold animate-pulse">+247</div>
                      <div className="text-xs text-slate-400">Hoje</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Status Indicators */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-3 animate-bounce shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full p-3 animate-pulse shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              
              {/* Data Flow Animation */}
              <div className="absolute top-1/2 -right-8 w-16 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full">
                <div className="w-3 h-3 bg-emerald-400 rounded-full absolute -top-1 left-0 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Flow Animation Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Fluxo de Pagamento Inteligente</h2>
            <p className="text-slate-300">Veja como processamos pagamentos com segurança e eficiência</p>
          </div>
          <PaymentFlowAnimation />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Built for Scale</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade payment infrastructure with developer-friendly APIs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-400">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-slate-800/30" id="developers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Developer Tools</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to build, test, and deploy payment solutions
            </p>
          </div>

          <Tabs defaultValue="transparent-checkout" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-800 border border-slate-700">
              {mockData.tools.map((tool, index) => (
                <TabsTrigger 
                  key={index} 
                  value={tool.name.toLowerCase().replace(' ', '-')}
                  className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
                >
                  {tool.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {mockData.tools.map((tool, index) => (
              <TabsContent key={index} value={tool.name.toLowerCase().replace(' ', '-')} className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tool.name}</h3>
                    <p className="text-slate-300 mb-6">{tool.description}</p>
                    <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className="bg-slate-900 rounded-lg border border-slate-700 p-6">
                    <div className="flex items-center mb-4">
                      <Terminal className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-sm text-slate-400">Code Example</span>
                    </div>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{tool.code}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Checkout Transparente Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Checkout Transparente</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Integre pagamentos diretamente em sua aplicação sem redirecionamentos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Múltiplas Linguagens</h3>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-slate-800 border border-slate-700">
                  <TabsTrigger value="javascript" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">JavaScript</TabsTrigger>
                  <TabsTrigger value="python" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">Python</TabsTrigger>
                  <TabsTrigger value="php" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">PHP</TabsTrigger>
                  <TabsTrigger value="curl" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">cURL</TabsTrigger>
                </TabsList>
                
                <TabsContent value="javascript" className="mt-6">
                  <div className="bg-slate-900 rounded-lg border border-slate-700 p-6">
                    <div className="flex items-center mb-4">
                      <Terminal className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-sm text-slate-400">JavaScript/Node.js</span>
                    </div>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{`const response = await fetch('/api/transactions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    amount: 10000, // R$ 100,00
    currency: 'BRL',
    payment_method: 'credit_card',
    customer: {
      name: 'João Silva',
      email: 'joao@email.com'
    },
    card: {
      number: '4111111111111111',
      exp_month: '12',
      exp_year: '2025',
      cvv: '123'
    }
  })
});

const transaction = await response.json();
console.log(transaction.status); // 'approved'`}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="python" className="mt-6">
                  <div className="bg-slate-900 rounded-lg border border-slate-700 p-6">
                    <div className="flex items-center mb-4">
                      <Terminal className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-sm text-slate-400">Python</span>
                    </div>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{`import requests

response = requests.post('/api/transactions', 
  headers={
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  json={
    'amount': 10000,  # R$ 100,00
    'currency': 'BRL',
    'payment_method': 'credit_card',
    'customer': {
      'name': 'João Silva',
      'email': 'joao@email.com'
    },
    'card': {
      'number': '4111111111111111',
      'exp_month': '12',
      'exp_year': '2025',
      'cvv': '123'
    }
  }
)

transaction = response.json()
print(transaction['status'])  # 'approved'`}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="php" className="mt-6">
                  <div className="bg-slate-900 rounded-lg border border-slate-700 p-6">
                    <div className="flex items-center mb-4">
                      <Terminal className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-sm text-slate-400">PHP</span>
                    </div>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{`<?php
$data = [
    'amount' => 10000, // R$ 100,00
    'currency' => 'BRL',
    'payment_method' => 'credit_card',
    'customer' => [
        'name' => 'João Silva',
        'email' => 'joao@email.com'
    ],
    'card' => [
        'number' => '4111111111111111',
        'exp_month' => '12',
        'exp_year' => '2025',
        'cvv' => '123'
    ]
];

$ch = curl_init('/api/transactions');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer YOUR_API_KEY'
]);

$response = curl_exec($ch);
$transaction = json_decode($response, true);
echo $transaction['status']; // 'approved'`}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="curl" className="mt-6">
                  <div className="bg-slate-900 rounded-lg border border-slate-700 p-6">
                    <div className="flex items-center mb-4">
                      <Terminal className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-sm text-slate-400">cURL</span>
                    </div>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{`curl -X POST /api/transactions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "amount": 10000,
    "currency": "BRL", 
    "payment_method": "credit_card",
    "customer": {
      "name": "João Silva",
      "email": "joao@email.com"
    },
    "card": {
      "number": "4111111111111111",
      "exp_month": "12",
      "exp_year": "2025", 
      "cvv": "123"
    }
  }'`}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-emerald-400" />
                    Segurança PCI DSS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Todos os dados de cartão são processados de forma segura seguindo os padrões PCI DSS Level 1.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-emerald-400" />
                    Resposta Instantânea
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Receba a resposta da transação em menos de 1 segundo, direto na sua aplicação.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-emerald-400" />
                    Múltiplos Métodos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Suporte para cartão de crédito, débito, PIX, boleto e carteiras digitais.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pagamento Recorrente Section */}
      <RecurringPaymentSection />

      {/* Webhooks Section */}
      <WebhooksSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Building?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of developers using PayTools to power their payment infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 text-lg">
              <Code className="w-5 h-5 mr-2" />
              Try Free Sandbox
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <AdaptiveLogo className="h-10 w-auto" />
              </div>
              <p className="text-slate-400 mb-4">
                Next-generation payment infrastructure for developers.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Checkout</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recurring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Links</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Developers</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SDKs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sandbox</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PayTools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;