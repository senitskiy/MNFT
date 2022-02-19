import graphene
from django.forms import ModelForm
from graphene_django import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation
from core.models import MNFT, User


# graphene type
class UserType(DjangoObjectType):
    class Meta:
        model = User


class MNFTType(DjangoObjectType):
    class Meta:
        model = MNFT


class Query(graphene.ObjectType):
    getAllMNFT = graphene.List(MNFTType)
    getMNFT = graphene.Field(MNFTType, address=graphene.String())
    getAllUser = graphene.List(UserType)
    getUser = graphene.Field(UserType, address=graphene.String())

    def resolve_getAllMNFT(root, info):
        return MNFT.objects.all()

    def resolve_getMNFT(root, info, address):
        if address is not None:
            return MNFT.objects.get(pk=address)
        else:
            return None

    def resolve_getAllUser(root, info):
        return User.objects.all()

    def resolve_getUser(root, info, address):
        if address is not None:
            return User.objects.get(pk=address)
        else:
            return None


class UserInput(graphene.InputObjectType):
    address = graphene.String()
    image = graphene.String()
    name = graphene.String()
    email = graphene.String()


class MNFTInput(graphene.InputObjectType):
    blockchain = graphene.Int()
    address = graphene.String()
    symbol = graphene.String()
    standart = graphene.Int()
    lastUpdate = graphene.Date()
    name = graphene.String()
    description = graphene.String()
    image = graphene.String()
    cost = graphene.Int()
    costAd = graphene.Int()
    creator = graphene.String()
    owner = graphene.String()
    sponsor = graphene.String()


class createMNFT(graphene.Mutation):
    class Arguments:
        # address = graphene.String(required=True)
        input = MNFTInput(required=True)
    ok = graphene.Boolean()
    MNFT = graphene.Field(MNFTType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        mnft_instanse = MNFT(address=input.address,
                             blockchain=input.blockchain,
                             symbol=input.symbol,
                             standart=input.standart,
                             lastUpdate=input.lastUpdate,
                             name=input.name,
                             description=input.description,
                             image=input.image,
                             cost=input.cost,
                             costAd=input.costAd,
                             creator=input.creator,
                             owner=input.owner,
                             sponsor=input.sponsor,
                             )
        mnft_instanse.save()
        return createMNFT(ok=ok, MNFT=mnft_instanse)


class updateMNFT(graphene.Mutation):
    class Arguments:
        address = graphene.String(required=True)
        input = MNFTInput(required=True)
    ok = graphene.Boolean()
    MNFT = graphene.Field(MNFTType)

    @staticmethod
    def mutate(root, info, address, input=None):
        ok = False
        mnft_instance = MNFT.objects.get(pk=address)
        if mnft_instance:
            ok = True
            mnft_instance.address = input.address
            mnft_instance.blockchain = input.blockchain
            mnft_instance.symbol = input.symbol,
            mnft_instance.standart = input.standart,
            mnft_instance.lastUpdate = input.lastUpdate,
            mnft_instance.name = input.name,
            mnft_instance.description = input.description,
            mnft_instance.image = input.image,
            mnft_instance.cost = input.cost,
            mnft_instance.costAd = input.costAd,
            mnft_instance.creator = input.creator,
            mnft_instance.owner = input.owner,
            mnft_instance.sponsor = input.sponsor,
            mnft_instance.save()
            return updateMNFT(ok=ok, MNFT=mnft_instance)
        return updateMNFT(ok=ok, MNFT=None)


class createUser(graphene.Mutation):
    class Arguments:
        input = UserInput(required=True)
    ok = graphene.Boolean()
    user = graphene.Field(UserType)

    @ staticmethod
    def mutate(root, info, input=None):
        ok = True
        user_instance = User(address=input.address,
                             image=input.image,
                             name=input.name,
                             email=input.email)
        user_instance.save()
        print(user_instance)
        return createUser(ok=ok, user=user_instance)


class updateUser(graphene.Mutation):
    class Arguments:
        address = graphene.String(required=True)
        input = UserInput(required=True)
    ok = graphene.Boolean()
    user = graphene.Field(UserType)

    @staticmethod
    def mutate(root, info, address, input=None):
        ok = False
        user_instance = User.objects.get(pk=address)
        if user_instance:
            ok = True
            user_instance.image = image = input.image
            user_instance.name = image = input.name
            user_instance.email = image = input.email
            user_instance.save()
            return updateUser(ok=ok, user=user_instance)
        return updateUser(ok=ok, user=None)


class createOrUpdateUser(graphene.Mutation):
    class Arguments:
        input = UserInput(required=True)
    ok = graphene.Boolean()
    user = graphene.Field(UserType)

    @ staticmethod
    def mutate(root, info, input=None):
        ok = True
        user_instance, create = User.objects.update_or_create(address=input.address,
                                                      image=input.image,
                                                      name=input.name,
                                                      email=input.email)
        user_instance.save()
        return createUser(ok=ok, user=user_instance)


class Mutation(graphene.ObjectType):
    createMNFT = createMNFT.Field()
    updateMNFT = updateMNFT.Field()
    createUser = createUser.Field()
    updateUser = updateUser.Field()
    createOrUpdateUser = createOrUpdateUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
