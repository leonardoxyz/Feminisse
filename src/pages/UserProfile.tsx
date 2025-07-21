import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  MapPin, 
  ShoppingBag, 
  Heart, 
  Edit, 
  Plus,
  Package,
  CreditCard
} from "lucide-react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");

  // Mock data
  const userInfo = {
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "+55 11 99999-9999",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b217?w=150&h=150&fit=crop&crop=face"
  };

  const addresses = [
    {
      id: 1,
      type: "Principal",
      street: "Rua das Flores, 123",
      neighborhood: "Centro",
      city: "São Paulo",
      state: "SP",
      zipCode: "01234-567",
      isDefault: true
    },
    {
      id: 2,
      type: "Trabalho",
      street: "Av. Paulista, 1000",
      neighborhood: "Bela Vista",
      city: "São Paulo",
      state: "SP",
      zipCode: "01310-100",
      isDefault: false
    }
  ];

  const orders = [
    {
      id: "#12345",
      date: "2024-01-15",
      status: "Entregue",
      total: 299.90,
      items: [
        { name: "Vestido Floral Verão", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=80&h=80&fit=crop" },
        { name: "Sandália Nude", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=80&h=80&fit=crop" }
      ]
    },
    {
      id: "#12344",
      date: "2024-01-10",
      status: "Em trânsito",
      total: 189.90,
      items: [
        { name: "Blusa Off-White", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=80&h=80&fit=crop" }
      ]
    }
  ];

  const favorites = [
    {
      id: 1,
      name: "Conjunto Tricot Caramelo",
      price: 159.90,
      originalPrice: 199.90,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Vestido Midi Estampado",
      price: 219.90,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Calça Wide Leg Bege",
      price: 179.90,
      originalPrice: 229.90,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header com informações do usuário */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
              <AvatarFallback className="text-lg">{userInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">{userInfo.name}</h1>
              <p className="text-muted-foreground text-sm">{userInfo.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Sidebar com navegação */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("personal")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "personal" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
              >
                <User className="h-5 w-5" />
                <span className="font-medium">Informações Pessoais</span>
              </button>
              
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "orders" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="font-medium">Histórico de Pedidos</span>
              </button>
              
              <button
                onClick={() => setActiveTab("addresses")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "addresses" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
              >
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Meus Endereços</span>
              </button>
              
              <button
                onClick={() => setActiveTab("favorites")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === "favorites" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
              >
                <Heart className="h-5 w-5" />
                <span className="font-medium">Lista de Favoritos</span>
              </button>
            </nav>
          </div>

          {/* Conteúdo principal */}
          <div className="flex-1">
            {/* Informações Pessoais */}
            {activeTab === "personal" && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Informações Pessoais</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Editar
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Nome Completo</label>
                      <p className="text-lg font-medium mt-1">{userInfo.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">E-mail</label>
                      <p className="text-lg font-medium mt-1">{userInfo.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Telefone</label>
                      <p className="text-lg font-medium mt-1">{userInfo.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">CPF</label>
                      <p className="text-lg font-medium mt-1">***.***.***-**</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Histórico de Pedidos */}
            {activeTab === "orders" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Histórico de Pedidos</h2>
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <Package className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-semibold">Pedido {order.id}</p>
                            <p className="text-sm text-muted-foreground">Realizado em {new Date(order.date).toLocaleDateString('pt-BR')}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={order.status === "Entregue" ? "default" : "secondary"}>
                            {order.status}
                          </Badge>
                          <p className="text-lg font-bold mt-1">R$ {order.total.toFixed(2).replace('.', ',')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <p className="text-sm font-medium">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Endereços */}
            {activeTab === "addresses" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Meus Endereços</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Endereço
                  </Button>
                </div>
                
                {addresses.map((address) => (
                  <Card key={address.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={address.isDefault ? "default" : "secondary"}>
                              {address.type}
                            </Badge>
                            {address.isDefault && (
                              <Badge variant="outline">Padrão</Badge>
                            )}
                          </div>
                          <p className="font-medium">{address.street}</p>
                          <p className="text-muted-foreground">
                            {address.neighborhood}, {address.city} - {address.state}
                          </p>
                          <p className="text-muted-foreground">CEP: {address.zipCode}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Editar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Lista de Favoritos */}
            {activeTab === "favorites" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Meus Favoritos</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favorites.map((item) => (
                    <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="absolute top-3 right-3 h-8 w-8 p-0 bg-white/90 hover:bg-white"
                          >
                            <Heart className="h-4 w-4 fill-current text-red-500" />
                          </Button>
                        </div>
                        <div className="p-4 space-y-2">
                          <h3 className="font-medium text-sm leading-tight">{item.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-primary">
                              R$ {item.price.toFixed(2).replace('.', ',')}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                              </span>
                            )}
                          </div>
                          <Button className="w-full" size="sm">
                            Adicionar ao Carrinho
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;